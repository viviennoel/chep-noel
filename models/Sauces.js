﻿const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    userId: { type: String },
    name: { type: String },
    manufacturer: { type: String },
    description: { type: String },
    mainPepper: { type: String },
    heat: { type: Number },
    imageUrl: { type: String },
    likes: { type: Number },
    dislikes: { type: Number },
    usersLiked: { type: String },
    usersDisliked: { type: String },
})

module.exports = mongoose.model('Sauce', sauceSchema);