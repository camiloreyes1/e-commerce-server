const { Schema, model, Tyoes} = require('mongoose')

const userSchema = new Schema(
    {
        fullName: String,

        email: {
            type: String,
            unique: true,
            required: true
        },

        password: {
            type: String,
            required: true
        }
    }, 
)

module.exports = model("User", userSchema)