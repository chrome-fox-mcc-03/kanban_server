const { Activity } = require('../models/index');

module.exports = function(req, res, next) {
    console.log('PARAMMMSSS ===> ', req.params.id);
    
    Activity.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(activity => {
            console.log(['Act ini punyanya: '], activity.UserId) 
            console.log(['sekarang yg login :'], req.currentUserId);
            
            if (activity) {
                if (activity.UserId === req.currentUserId) {
                    next();
                } else {
                    res.status(401).json({ status: 401, message: "Authorization failed" })
                }
            } else {
                res.status(404).json({ status: 404, message: "Sorry, we do not find the activity you're looking for" })
            }
            return null
        })
        .catch(err => {
            console.log('errorrrrr disini');
            
            res.status(500).json(err)
        })
}