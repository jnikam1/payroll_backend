const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserModel = mongoose.Schema({
    fname:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    lname:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }

})

// Pre before updating database

UserModel.pre('save',function (next){
    const saltRounds = 10
    // Encrypt the paswword
    this.password = bcrypt.hashSync(this.password,saltRounds)
    next() // Execute consective funtion 
})

module.exports = mongoose.model('user',UserModel)