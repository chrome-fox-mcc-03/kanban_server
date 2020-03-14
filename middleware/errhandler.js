module.exports = function(err, req, res, next) {
    if(err.name) {
        switch (err.name) {

            default:
                let msg = {
                    msg: 'Bad Request'
                }
                res.status(400).json(err)
                break;
        }
    }
    else {
        switch (err.msg) {
            case "This Email Is Not Registered":
                res.status(400).json(err)
                break;
        
            default:
                let msg = {
                    msg: 'Bad Request'
                }
                res.status(400).json(msg)
                break;
        }
    }
}