const ProductController = require('../controllers/ProductController')
const productRouter = require("./productRouter") 



const routes = app => {
    app.use('/products', productRouter)
    app.use('/', 
        (req,res) => res.json('home')
    )
}

module.exports = routes

