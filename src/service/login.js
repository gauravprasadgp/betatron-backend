var jwt = require('jsonwebtoken');
// const Bcrypt = require('bcrypt');
const user = require('../model/user');
const secret = require('../config/secret');

var login = (req, res) => {
    const name = req.body.displayName
    const email = req.body.email
    const photo = req.body.photo
    const phoneno = req.body.phoneno
    const accesstoken = req.body.accesstoken
    const idtoken = req.body.idtoken
    user.findOne({ $or: [{ name: name }, { email: email }] }, (err, result) => {
        if (err) {
            res.json({
                status: 400,
                success: false,
                err: err
            })
        }
        else {
            console.log(result);
            if (result == null || result == undefined) {
                res.json({
                    status: 400,
                    success: false,
                    data: "User does not exist"
                })
            }
            else {
                var encryptedPassword = result.password;
                // Bcrypt.compare(password, encryptedPassword, (err, bcrypt_result) => {
                //     console.log(bcrypt_result)
                //     var token = jwt.sign(
                //         { email: result.email, username: result.username, id: result._id },
                //         secret.secret,
                //         { expiresIn: "10days" });
                //     if (bcrypt_result === true) {
                //         res.json({
                //             status: 200,
                //             success: true,
                //             token: token
                //         })
                //     }
                //     else {
                //         res.json({
                //             status: 400,
                //             success: false,
                //             data: "Please check your password and try again",
                //             token: "Failed to fetch"
                //         })
                //     }

                // })
            }
        }
    })
}
module.exports = login