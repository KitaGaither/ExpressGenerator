const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     admin: {
//         type: Boolean,
//         default: false
//     }
// });

const userSchema = new Schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    admin: {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model('User', userSchema);