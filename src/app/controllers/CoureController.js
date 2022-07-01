const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    detail(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((Course) => {
                res.render('courses/detail', {
                    Course: mongooseToObject(Course),
                });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res, next) {
        const formData = req.body;
        formData.image =
            'https://i.ytimg.com/vi_webp/' +
            req.body.videoID +
            '/sddefault.webp';
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('./'))
            .catch(Error);
    }
}

module.exports = new CourseController();
