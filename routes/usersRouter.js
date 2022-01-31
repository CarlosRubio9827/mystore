const express = require('express');
const router = express.Router();

const UsersService = require('./../services/userService')
const service = new UsersService();


router.get('/',(req, res)=>{

    const users = service.find();
    res.json(users)
})

router.get('/filter', (req, res)=>{
    res.send("Hola, soy un filter");
})

router.get('/:id',(req, res)=>{
    const {id} = req.params
    const user = service.findOne(id);
    res.json(user)
})

router.post('/',(req, res)=>{
    const body = req.body
    res.status(201).json({
        message: 'Create',
        data: body
    })
})

router.put('/:id',(req, res)=>{
    const body = req.body
    // const id = req.params
    res.json({

        message: 'UpdatePut',
        data: body
    })
})

router.patch('/:id',(req, res)=>{
    const body = req.body
    res.json({
        message: 'UpdatePatch',
        data: body
    })
})

router.delete('/:id',(req, res)=>{
    res.json({
        message: 'Delete',
    })
})

module.exports = router