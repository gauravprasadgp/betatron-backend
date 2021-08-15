const entity = require('../model/entity');
var allEntity = (req,res ) =>{
    var category= req.body.category;
    entity.find({category:category}, (err, result) => {
        if (err) {
            console.log(err);
            res.json({
                status: 400,
                success: false,
                err: err
            })
        }
        else {
            res.json({
                status: 200,
                success: true,
                data:result
            })
        }
    })
}
module.exports = allEntity;