const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.delete('/delete/:id', courseController.delete);
router.delete('/force/:id', courseController.forceDelete);


router.get('/create', courseController.create);
router.get('/edit/:id', courseController.edit);
router.get('/:slug', courseController.detail);

router.patch('/restore/:id', courseController.restore);

router.post('/store', courseController.store);

router.put('/:id', courseController.update);


module.exports = router;
