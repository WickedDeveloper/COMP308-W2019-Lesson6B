let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Create reference to the DB scheme
let about = require('../models/about');

// GET About page - READ Operation
router.get('/', (req, res, next) => {
    about.find((err, favouriteThngs) => {
        if(err) {
            return console.error(err);
        }
        else {
            console.log(favourite-things);

            /*
            res.render('about/index', {
                title: 'Favourite Things',
                aboutList: favouriteThngs
            });
            */
        }
    });
});

module.export = router;