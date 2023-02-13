const mongoose = require('mongoose')
const boxSchema = require('./box')

const micSchema = new mongoose.Schema(
	{
		model: {
			type: String,
			required: true,
		},
		make: {
			type: String,
			required: true,
		},
        type: {
            type: String,
            enum: ['Dynamic', 'Condenser', 'Ribbon'],
            required: true,
        },
        phantom: {
            type: Boolean,
            required: true
        },
        box : [boxSchema],
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{
		timestamps: true,
        toObject: { virtuals: true},
        toJSON: { virtuals: true }
	}
)

micSchema.virtual('micInfo').get(function () {
    return `The ${this.make} ${this.model} is a ${this.type} microphone`
})

module.exports = mongoose.model('Mic', micSchema)
