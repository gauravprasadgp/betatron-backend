const entity = require('../model/entity');
var insertEntity = (req,res ) =>{
    var entity_to_add = {
       name:req.body.name,
       owner :req.body.owner,
       contact_info:req.body.contact_info,
       visible_location:req.body.visible_location,
       location:{latitude:req.body.latitude,longitude:req.body.longitude},
       tags: req.body.tags,
       category: req.body.category
    }
    entity.create(entity_to_add,(err,result) =>{
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
            })
        }
    })
}
module.exports = insertEntity