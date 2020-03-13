"use strict"

const { Board, User, UserBoard } = require('../models/index')
const bgUrl = [
    "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/583846/pexels-photo-583846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/917494/pexels-photo-917494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/1546901/pexels-photo-1546901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
]

class Controller {
    static addBoard(req, res, next){
        let newBoard
        const promises = [];
        for(const key in req.body){
            if(!req.body[key]){
                req.body[key] = null
            }
        }
        if(req.body.background_id > 8){
            throw({
                statusCode: 400,
                msg: 'Background not found.'
            })
        }
        const data = {
            title: req.body.title,
            background_id: bgUrl[req.body.background_id],
            creator_id: req.decoded.id
        }
        Board.create(data)
        .then(result => {
            newBoard = result
            const sharedUserId = req.body.sharedUserId
            if(sharedUserId){
                sharedUserId.forEach(userId => {
                    let promise = new Promise((resolve, reject) => {
                        UserBoard.create({
                            user_id: userId,
                            board_id: result.id
                        })
                        .then(response => resolve(response))
                        .catch(err => reject(err))
                    })
                    promises.push(promise)
                })
                return Promise.all(promises)                
            }
        })
        .then(response => {
            res.status(201).json({newBoard, msg: 'Board created'})
        })
        .catch(err)
    }

    static deleteBoard(req, res, next){
        const board_id = req.params.id
        Board.destroy({
            where: {
                id: board_id
            }
        })
        .then(result => {
            res.status(200).json({msg: 'Board deleted'})
        })
        .catch(next)
    }

    static showYourBoard(req, res, next){
        const userId = req.decoded.id
        Board.findAll({
            where: {
                creator_id: userId
            }
        })
        .then(results => {
            if(results[0]){
                res.status(200).json({boards: results})
            }else{
                res.status(200.).json({boards: null, msg: 'You dont have any board'})
            }
        })
        .catch(next)
    }

    static showSharedBoard(req, res, next){
        Board.findAll({
            include: {
                model: User,
                as: 'SharedBoard'
            },
        })
        .then(results => {
            const sharedBoard = []
            results.forEach( el => {
                el.dataValues.SharedBoard.forEach(member => {
                    if(member.id == req.decoded.id){
                        sharedBoard.push(el)
                    }
                })
            })
            if(sharedBoard[0]){
                res.status(200).json({boards: sharedBoard})
            }else{
                res.status(200).json({boards: null, msg: 'You dont have any shared board'})
            }
        })
        .catch(next)
    }

}

module.exports = Controller