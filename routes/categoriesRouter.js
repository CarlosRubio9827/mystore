const express= require('express');
const router = express.Router();
const CategoriesService = require('./../services/categoriesService');
const service = new CategoriesService()


router.get('/',(req, res)=>{
    const categories = service.find()
    res.json({
        categories
    })
})

router.get('/:id',(req, res)=>{
    const {id} = req.params
    const categorie = service.findOne(id);
    res.json(categorie)
})

router.get('/:idCategorie/products/:idProduct', (req,res)=>{
    const {idCategorie, idProduct} = req.params
    res.json({
        idCategorie,
        idProduct
    })
})

module.exports = router