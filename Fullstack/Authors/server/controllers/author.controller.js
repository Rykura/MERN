const Author = require('../models/author.model');
const authorRoutes = require('../routes/author.routes');

module.exports.findAllAuthors = (req,res)=>{
    Author.find()
        .then(allAuthors=>{
            res.json({results: allAuthors})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.getOneAuthor = (req,res)=>{
    Author.findOne({_id: req.params.id})
        .then(oneAuthor=>{
            res.json({results: oneAuthor})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.randomAuthor = (req,res)=>{
    Author.find()
        .then(allAuthors=>{
            res.json({results: allAuthors[Math.floor(Math.random()*allAuthors.length)]})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.createAuthor = (req,res)=>{
    Author.create(req.body)
        .then(newAuthor=>{
            res.json({results: newAuthor})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}


module.exports.updateAuthor = (req,res)=>{
    Author.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidator: true }
        )
        .then(updatedAuthor=>{
            res.json({results: updatedAuthor})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.deleteOneAuthor = (req,res)=>{
    Author.deleteOne({_id: req.params.id})
    .then(deletedAuthor=>{
        res.json({results: deletedAuthor})
    })
    .catch(err=>{
        res.json({message: "Something went wrong", error: err})
    })

}