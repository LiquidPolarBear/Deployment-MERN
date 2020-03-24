const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema(
    {  
        name: {
            type: String,
            required: [true, "Pet name is required"],
            unique: [true],
            minlength: [3, "The pet name must be at least 3 characters long."],
        },
        type: {
            type: String,
            required: [true, "Pet type is required"],
            minlength: [3, "The pet type must be at least 3 characters long."],
        },
        description: {
            type: String,
            required: [true, "Pet description is required"],
            minlength: [3, "The pet description must be at least 3 characters long."],
        },
        skill1: {
            type: String,
            required: [false],
        },
        skill2: {
            type: String,
            required: [false],
        },
        skill3: {
            type: String,
            required: [false],
        },
    },
    { timestamps: true }
);

PetSchema.plugin(uniqueValidator);
module.exports.Pet = mongoose.model('Pet', PetSchema);