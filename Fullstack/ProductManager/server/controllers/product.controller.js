const Product = require('../models/product.model');
const productRoutes = require('../routes/product.routes');

module.exports.findAllProducts = (req,res)=>{
    Product.find()
        .then(allProducts=>{
            res.json({results: allProducts})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.getOneProduct = (req,res)=>{
    Product.findOne({_id: req.params.id})
        .then(oneProduct=>{
            res.json({results: oneProduct})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.randomProduct = (req,res)=>{
    Product.find()
        .then(allProducts=>{
            res.json({results: allProducts[Math.floor(Math.random()*allProducts.length)]})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.createProduct = (req,res)=>{
    Product.create(req.body)
        .then(newProduct=>{
            res.json({results: newProduct})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}


module.exports.updateProduct = (req,res)=>{
    Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidator: true }
        )
        .then(updatedProduct=>{
            res.json({results: updatedProduct})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.deleteOneProduct = (req,res)=>{
    Product.deleteOne({_id: req.params.id})
    .then(deletedProduct=>{
        res.json({results: deletedProduct})
    })
    .catch(err=>{
        res.json({message: "Something went wrong", error: err})
    })

}