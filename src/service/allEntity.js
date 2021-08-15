const entity = require('../model/entity');
var allEntity = (req,res ) =>{
    var category= req.body.category;
    entity.find({category:category}, (err, result) => {
        if (err) {
            console.log(err);
        res.status(400);
        res.send(err);
        }
        else {
            res.send(result);
        }
    })
}
module.exports = allEntity;