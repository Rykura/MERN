const Joke = require('../models/joke.model');
const jokeRoutes = require('../routes/joke.routes');

module.exports.findAllJokes = (req,res)=>{
    Joke.find()
        .then(allJokes=>{
            res.json({results: allJokes})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.getOneJoke = (req,res)=>{
    Joke.findOne({_id: req.params.id})
        .then(oneJoke=>{
            res.json({results: oneJoke})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.randomJoke = (req,res)=>{
    Joke.find()
        .then(allJokes=>{
            res.json({results: allJokes[Math.floor(Math.random()*allJokes.length)]})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.createJoke = (req,res)=>{
    Joke.create(req.body)
        .then(newJoke=>{
            res.json({results: newJoke})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}


module.exports.updateJoke = (req,res)=>{
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidator: true }
        )
        .then(updatedJoke=>{
            res.json({results: updatedJoke})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error: err})
        })
}

module.exports.deleteOneJoke = (req,res)=>{
    Joke.deleteOne({_id: req.params.id})
    .then(deletedJoke=>{
        res.json({results: deletedJoke})
    })
    .catch(err=>{
        res.json({message: "Something went wrong", error: err})
    })

}