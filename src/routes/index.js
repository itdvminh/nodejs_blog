const newsRouter = require('./news');
const siteRouter = require('./site');
const coureRouter = require('./courses');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/courses', coureRouter);

    app.use('/', siteRouter);
}

module.exports = route;
