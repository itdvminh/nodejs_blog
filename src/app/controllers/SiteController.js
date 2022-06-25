const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    index(req, res, next) {
        Course.find({})
            .then((Course) => {
                res.render('home', {
                    Course: mutipleMongooseToObject(Course),
                });
            })
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }

    about(req, res){
        res.render('about')
    }
}

module.exports = new SiteController();
