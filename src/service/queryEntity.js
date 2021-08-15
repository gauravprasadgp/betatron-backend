const entity = require('../model/entity');
var queryEntity = (req,res ) =>{
    var entity_to_find= req.body.to_find;
    entity.fuzzySearch(entity_to_find, (err, doc) => {
        if (err) {
            console.log(err);
            res.status(400);
            res.send(err);
        }
        else {
        res.status(200);
         res.send(doc);
        }
        })
}
module.exports = queryEntity