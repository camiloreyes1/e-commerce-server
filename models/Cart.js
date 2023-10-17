const { Schema, model } = require('mongoose');

const cartSchema = new Schema(
    {
        products: [{type: Schema.Types.ObjectId, ref: 'Product'}],
        subtotal: {
            type: Number,
            default : 0
        },

        tax: {
            type: Number,
            default: 1.08
        },

        total: {
            type: Number,
            default: 0
        },

        owner: {type: Schema.Types.ObjectId, ref: 'User'},
        timeLeft: Date,
        expireAt: { type: Date, expires: '5m', default: Date.now}
    },

    {
        timestamps: true
    }
)

module.exports = model('Cart', cartSchema)