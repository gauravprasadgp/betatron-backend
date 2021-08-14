
const user = require('../model/user');
var signup = (req, res) => {
    const name = req.body.displayName
    const email = req.body.email
    const photo = req.body.photo
    const phoneno = req.body.phoneno
    const accesstoken = req.body.accesstoken
    const idtoken = req.body.idtoken
    // var salt = Bcrypt.genSaltSync();
    // var temp_password = password
    // var encryptedPassword = Bcrypt.hashSync(temp_password, salt);
    // console.log(encryptedPassword);
    var user_to_add = {
        name: name,
        email: email,
        photo : photo,
        phoneno:phoneno,
        accesstoken:accesstoken,
        idtoken:idtoken
    }
    user.create(user_to_add, (err, result1) => {
        if (err) {
            console.log(err);
            res.json({
                status: 400,
                success: false,
                err: err
            })
        }
        else {
            // console.log(result1);
            res.json({
                status: 200,
                success: true,
                data: {
                    username: username,
                    email: email
                }
            })
        }
    })
}
module.exports = signup