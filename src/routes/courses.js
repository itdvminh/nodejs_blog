const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CoureController');

router.get('/create', courseController.create);
router.get('/edit/:id', courseController.edit);
router.get('/delete/:id', courseController.delete);
router.get('/:slug', courseController.detail);

router.post('/store', courseController.store);

router.put('/:id', courseController.update);

module.exports = router;
