const productRouter = require('./productsRouter')
const userRouter = require('./usersRouter')
const categorieRouter = require('./categoriesRouter')
const express = require('express');

function routerApi(app){
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/products', productRouter);
    router.use('/users', userRouter);
    router.use('/categories', categorieRouter);
}

module.exports = routerApi