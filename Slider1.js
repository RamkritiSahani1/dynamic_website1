const mongoose = require('mongoose');
const Slider1 = mongoose.Schema({
    title : String,
    subTitle : String,
    imageUrl : String,
    class : String
});

module.exports = mongoose.model('sliders', Slider1);