const Product = require('../models/Product')

function ProductController() {
    this.getProducts = async function(req,res) {
        const product = await Product.find({})
            .then(data => res.json(data))
    }
    this.createProduct = async function(req,res) {
        const product = req.body
        const newProduct = new Product(product.data)
        await newProduct.save()
        res.json(newProduct) 
        console.log(newProduct)
    }
    this.getOneProduct = async function(req,res) {
        try {
            const product = await Product.find({
                _id: req.params.id
            })
            res.json(product)

        } catch(err) {
            res.json({
                error: 'fail',
                err
            })
        }
    }
    this.filterProduct = async function(req,res) {
        try {
            const product = await Product.find({
                groupId: req.query.groupid
            })
            res.json(product)
            // console.log(req.query)
        } catch(err) {
            console.log(err)
        }
    }
}

module.exports = new ProductController