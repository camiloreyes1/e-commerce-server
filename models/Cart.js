const { Schema, model } = require('mongoose');

const cartSchema = new Schema(
    {
        products: [{type: Schema.Types.ObjectId, ref: 'Product'}],
        subtotal: {
            type: Number,
            default : 0
        },

    }
)