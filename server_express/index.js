const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = 7000;

const app = express();

app.use(express.json());

app.get('/products/:product_picture', (req, res) => {
    console.log(req.params.product_picture);
    res.sendFile(__dirname + `/img/${req.params.product_picture}`)
})

app.get('/products', (req, res) => {
    fs.readFile('data/products.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return;
        }
        res.send(data);
    })
})

app.listen(PORT, () => {
    console.log(`server listens on port ${PORT}`);
})