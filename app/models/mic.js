const mongoose = require('mongoose')

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
            required: true,
        },
        phantom: {
            type: Boolean,
            required: true
        },
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
    return `${this.make} ${this.model} is a ${this.type} microphone`
})

module.exports = mongoose.model('Mic', micSchema)
