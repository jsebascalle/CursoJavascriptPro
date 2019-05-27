const express = require("express");
const CategoriesController = require("../controllers/categories");
let router = express.Router();

router.get('/category/create',CategoriesController.create);
router.route('/category').get(CategoriesController.index).post(CategoriesController.store);

router.get('/category/:id/edit',CategoriesController.edit);

router.route('/category/:id').get(CategoriesController.show).put(CategoriesController.update).delete(CategoriesController.destroy);


module.exports = router;
