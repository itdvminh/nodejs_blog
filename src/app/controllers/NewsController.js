class NewsController {
    index(req, res) {
        res.render('news');
    }

    detail(req, res) {
        res.send('Detail');
    }
}

module.exports = new NewsController();
