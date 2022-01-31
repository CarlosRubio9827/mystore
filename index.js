const express = require('express');
const cors = require('cors');
const app = express();
const port = 3005;
const routerApi = require('./routes')

const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/errorHandler')

app.use(express.json())

const whiteList = ['http://localhost:5500', 'https://myapp.co']
const options = {
    origin: (origin, callback)=>{
        if(whiteList.includes(origin)){
            callback(null, true)
        }else{
            callback(new Error('No permitido'))
        }
    }
}

app.use(cors(options))
app.get('/', (req, res)=>{
    res.send("Hole")
})

routerApi(app)
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)


app.listen(port, ()=>{
    console.log("Escuchando en el puerto " + port);
})