const ThingController = require('../controllers/thing.controller');

module.exports = (app) => {
    app.get("/api/things", ThingController.findAllThings)
    app.get("/api/things/:id", ThingController.getOneThing)
    app.get("/api/random", ThingController.randomThing)
    app.post("/api/things/new", ThingController.createThing)
    app.put("/api/things/update/:id", ThingController.updateThing)
    app.delete("/api/things/delete/:id", ThingController.deleteOneThing)
}