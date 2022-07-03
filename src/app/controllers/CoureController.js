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
            'http://img.youtube.com/vi/' + req.body.videoID + '/mqdefault.jpg';
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('./'))
            .catch(Error);
    }
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => {
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
    // [PUT]
    update(req, res, next) {
        const formData = req.body;
        formData.image =
            'http://img.youtube.com/vi/' + req.body.videoID + '/mqdefault.jpg';
        Course.updateOne({ _id: req.params.id }, formData)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController();
