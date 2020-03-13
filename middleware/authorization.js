"use strict"

const { Board, Task } = require('../models/index')

function checkBoard(req, res, next) {
    Board.findOne({
        where:{
            id: req.params.id,
            creator_id: req.decoded.id
        }
    })
    .then(result => {
        if(result){
            next()
        }
        else{
            throw({
                statusCode: 401,
                msg: 'You cannot delete board that you didnt create. Please contact the board owner.'
            })
        }
    })
    .catch(next)
}

function checkTaskBoardDelete(req, res, next){
    Task.findOne({
        where: {
            id: req.params.id,
        }
    })
    .then(result => {
        return Board.findOne({
            where: {
                creator_id: req.decoded.id,
                id: result.board_id
            }
        })
    })
    .then(result => {
        if(result){
            next()
        }
        else{
            throw({
                statusCode: 401,
                msg: 'You cannot delete this card. Please contact the board owner'
            })
        }
    })
    .catch(next)
}

function checkTaskBoardAdd(req, res, next){
    Board.findOne({
        where: {
            id: req.params.boardId,
            creator_id: req.decoded.id,
        }
    })
    .then(result => {
        if(result){
            next()
        }
        else{
            throw({
                statusCode: 401,
                msg: 'You cannot add card. Please contact the board owner'
            })
        }
    })
    .catch(next)
}

module.exports = {
    checkBoard,
    checkTaskBoardAdd,
    checkTaskBoardDelete
}