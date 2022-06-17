const UserModel = require('../model/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// User created
exports.create = (req,res,next)=>{
    const {fname,lname,email,password} = req.body

    UserModel.create({
        fname,
        lname,
        email,
        password

    },(err,result)=>{
        if(err)
            next(err)
        else
            res.status(200).json({
                status: "Success",
                message: "User added successfully",
                data: result
            })

    })

}

// User Login
exports.login = (req,res,next) =>{
    UserModel.findOne({email:req.body.email},
        (err,result)=>{
            if(err){
                next(err)
            }
            else{
                if(bcrypt.compare(req.body.password, result.password)){
                    const token = jwt.sign({id:result._id},req.app.get('secretKey'),{expiresIn:'1h'})
                    res.status(200).json({
                        status: "Success",
                        message: "User logged in successfully",
                        data: {
                            user:result,
                            token:token
                        }

                    })
                }

            }
    })
}
