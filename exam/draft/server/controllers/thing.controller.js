const Thing = require('../models/thing.model');
const thingRoutes = require('../routes/thing.routes');

module.exports.findAllThings = (req,res)=>{
    Thing.find()
        .then(allThings=>{
            res.json({results: allThings})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.getOneThing = (req,res)=>{
    Thing.findOne({_id: req.params.id})
        .then(oneThing=>{
            res.json({results: oneThing})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.randomThing = (req,res)=>{
    Thing.find()
        .then(allThings=>{
            res.json({results: allThings[Math.floor(Math.random()*allThings.length)]})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.createThing = (req,res)=>{
    Thing.create(req.body)
        .then(newThing=>{
            res.json({results: newThing})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}


module.exports.updateThing = (req,res)=>{
    Thing.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidator: true }
        )
        .then(updatedThing=>{
            res.json({results: updatedThing})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.deleteOneThing = (req,res)=>{
    Thing.deleteOne({_id: req.params.id})
    .then(deletedThing=>{
        res.json({results: deletedThing})
    })
    .catch(err=>{
        res.json({message: "Something went wrong", error: err})
    })

}