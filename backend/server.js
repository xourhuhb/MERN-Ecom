import express from 'express';
import dotenv from 'dotenv';
dotenv.config()
import products from './data/products.js'

const port = process.env.PORT || 5000;
const app = express();

app.get('/', (req,res) =>{

    res.send('Api is running..')
})
app.get('/api/products', (req,res) =>{
    res.json(products);
})

app.get('/api/products/:id',(req,res)=>{
    const prods = (products.find((prod)=> prod._id === req.params.id))
    res.json(prods)
})
app.listen(port, ()=> console.log(`server on ${port}`))