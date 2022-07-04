const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET]   /:slug
    detail(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((Course) => {
                res.render('courses/detail', {
                    Course: mongooseToObject(Course),
                });
            })
            .catch(next);
    }

    // [GET]   /create
    create(req, res) {
        res.render('courses/create');
    }

    // [POST]   /store
    store(req, res) {
        const formData = req.body;
        formData.image =
            'http://img.youtube.com/vi/' + req.body.videoID + '/mqdefault.jpg';
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('./'))
            .catch(Error);
    }
    // [GET]   /edit/:id
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => {
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    // [PUT]   /course
    update(req, res, next) {
        const formData = req.body;
        formData.image =
            'http://img.youtube.com/vi/' + req.body.videoID + '/mqdefault.jpg';
        Course.updateOne({ _id: req.params.id }, formData)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [DELETE]   /delete/:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE]   /force/:id
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH]   /restore/:id
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController();
