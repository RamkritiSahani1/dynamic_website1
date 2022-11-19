const express = require('express');
const View = require('express/lib/view');
const hbs = require('hbs');
// const { route } = require('./routes/main');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const routes = require('./routes/main');
const Detail = require("./models/Detail");
const Slider = require('./models/Slider1');
const Service = require('./models/Service')



// body-perser for form
app.use(bodyParser.urlencoded ({
    extended : true
}))

//static section/css/images 
app.use('/static', express.static("public"));

//Router section
app.use('', routes);

//template engine section
app.set('view engine', 'hbs');
app.set('views', 'views');

//partials register
hbs.registerPartials('views/partials');

// db connection
mongoose.connect('mongodb://localhost:27017/website', () => {
    console.log("db connected");


    // Service.create([
    //     {
    //         icon : 'fas fa-volleyball-ball',
    //         title : 'Provide Best Courses',
    //         description : 'We provide best courses taht helps us our students in learning and in placement',
    //         linkText : 'https://www.learncodewithdurgesh.com',
    //         link : 'Check'
    //     },
    //     {
    //         icon : 'fas fa-virus',
    //         title : 'Learn Projects',
    //         description : 'We provide best courses taht helps us our students in learning and in placement',
    //         linkText : 'https://www.learncodewithdurgesh.com',
    //         link : 'Learn'
    //     },
    //     {
    //         icon : 'fas fa-virus',
    //         title : 'Learn Projects',
    //         description : 'We provide best courses taht helps us our students in learning and in placement',
    //         linkText : 'https://www.learncodewithdurgesh.com',
    //         link : 'Learn'
    //     }
    // ])
    
    // Detail.create({
    //     brandName:"Info Technical Solutions",
    //     brandIconUrl:"/static/images/logo.jpg",
    //     links : [
    //         { label : "Home", url : "/"},
    //         { label : "Services", url : "/services"},
    //         { label : "Gallery", url : "/gallery"},
    //         { label : "About", url : "/about"},
    //         { label : "Contact Us", url : "/contact-us"},
            
    //     ]
    // });

    

// Slider.create([
//     {
//         title : "Learn Java in very easy manner",
//         subTitle : "Java is one of the most popular programming language.",
//         imageUrl : "/static/images/cyber.jpg"
//     },
//     {
//         title : "What is a Django in python",
//         subTitle : "Django is a most famoues framework of python progamming",
//         imageUrl : "/static/images/desktop theme.jpg"
//     },
//     {
//         title : "What about node js",
//         subTitle : "Node js is runtime envirnment to execute javascript outside borwser",
//         imageUrl : "/static/images/airhostes.png"
//     },
// ])


});
mongoose.con;

app.listen(port, () => {
    console.log(`server started at port number ${port}`);
});