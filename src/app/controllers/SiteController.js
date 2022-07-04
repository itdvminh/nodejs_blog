const Course = require('../models/Course');
const {
    multipleMongooseToObject: multipleMongooseToObject,
} = require('../../util/mongoose');

class SiteController {
    
    // [GET]    /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // [GET]    /about
    about(req, res) {
        res.render('about');
    }
}

module.exports = new SiteController();
