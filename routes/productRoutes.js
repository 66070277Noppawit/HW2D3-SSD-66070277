const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/search/:keyword', controller.search);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.softDelete);
router.get('/deleted/all', controller.getDeleted);
router.patch('/restore/:id', controller.restore);

module.exports = router;
