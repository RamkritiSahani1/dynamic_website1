const express = require('express');
const { route } = require('express/lib/application')
const Detail = require('../models/Detail');
const Service = require('../models/Service');
const Slider1 = require('../models/Slider1');
const Contact = require('../models/Contact')
const routes = express.Router();

routes.get('/', async (req, res) => {

    const details = await Detail.findOne({"_id" : "6334f84fcc4e2012b18cf46d"});
    // console.log(details);
    const slides = await Slider1.find();
    // console.log(slides);
    const services = await Service.find()

    res.render("index", {
        details : details,
        slides : slides,
        services:services
    })
    
});

routes.get('/gallery', async (req, res) => {
    const details = await Detail.findOne({"_id" : "6334e5429e9e5bfa07e673a1"});
    
    res.render("gallery", {
        details : details
    });
});

// process-contact-form
routes.post("/process-contact-form", async (reqest, response) => {
    console.log("form is submitted");
    console.log(reqest.body)
    // save the data to db
try {
    const data = await Contact.create(reqest.body)
    console.log(data)
    response.redirect("/")

} catch (e) {
    console.log(e)
    response.redirect("/")
}
});



module.exports = routes;