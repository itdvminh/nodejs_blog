const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/about', siteController.about);
router.get('/:slug', siteController.index);
router.get('/', siteController.index);

module.exports = router;
