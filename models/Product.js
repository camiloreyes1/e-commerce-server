const { Schema, model, Types }  = require('mongoose')

const productSchema = new Schema(
    {
        owner: {type: Schema.Types.ObjectId, ref:'User'},
        cost: {
            type: Number,
            default: 0
        },

        image: String,
        description: String,
        size: String,
        color: String
    },

    {
        timeseries: true
    }
)

module.exports = model ('Product', productSchema)