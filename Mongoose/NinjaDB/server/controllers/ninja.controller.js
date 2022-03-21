const Ninja = require('../models/ninja.model');

module.exports.helloWorld = (req,res)=>{
    res.json({msg:"Hello"})
}

module.exports.findAllNinjas = (req,res)=>{
    Ninja.find()
        .then(allNinjas=>{
            res.json({results: allNinjas})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.createNinja = (req,res)=>{
    Ninja.create(req.body)
        .then(newNinja=>{
            res.json({results: newNinja})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.getOneNinja = (req,res)=>{
    Ninja.findOne({_id: req.params.id})
        .then(oneNinja=>{
            res.json({results: oneNinja})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.updateNinja = (req,res)=>{
    Ninja.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidator: true }
        )
        .then(updatedNinja=>{
            res.json({results: updatedNinja})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.deleteOneNinja = (req,res)=>{
    Ninja.deleteOne({_id: req.params.id})
    .then(deletedNinja=>{
        res.json({results: deletedNinja})
    })
    .catch(err=>{
        res.json({message: "Something went wrong", error: err})
    })

}