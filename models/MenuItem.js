const mongoose = require('mongoose'); 

const menuItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },

    price:{
        type: Number,
        required: true,
    },

    taste:{
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required: true
    },

    is_drink:{
        type: Boolean,
        defualt: false
    },

    ingredients:{
        type: [String],
        defualt: []
    },

    num_sales:{
        type: Number,
        defualt: 0
    }
});


const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;