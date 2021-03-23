const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Required Field"],
        minlength: [3, "Must be at least 3 characters long."]
    },
}, {timestamps:true})

const Author = new mongoose.model("Author", AuthorSchema);

module.exports = Author;