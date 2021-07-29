const express       =       require('express')
const router        =       express.Router()
const controllers   =       require('../controllers/main')

router.get('/',controllers.home)
router.post('/add-category',controllers.mainCategory)
router.post('/add-sub-category',controllers.subCategory)
router.post('/add-products',controllers.addProduct)
router.post('/edit-main',controllers.editMainCategory)
router.post('/edit-sub',controllers.editSubCategory)

module.exports      =       router;