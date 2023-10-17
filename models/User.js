const { Schema, model, Types} = require('mongoose')

const userSchema = new Schema(
    {
        
        email: {
            type: String,
            unique: true,
            required: true
        },
        
        password: {
            type: String,
            required: true
        }, 

        fullName: String,
    }
)

module.exports = model("User", userSchema)