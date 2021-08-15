const entity = require('../model/entity');
var queryEntity = (req,res ) =>{
    var entity_to_find= req.body.to_find;
    entity.fuzzySearch(entity_to_find, (err, doc) => {
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
                data:doc
            })
        }
    })
}
module.exports = queryEntity