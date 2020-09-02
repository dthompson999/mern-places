console.log("place.routes.js");

const Place = require("../controllers/place.controller");

module.exports = app => {
    app.get("/api/place", Place.getAll);
    app.post("/api/place/new", Place.create);
    app.get("/api/place/:_id", Place.getOne);
    app.put("/api/place/update/:_id", Place.update);
    app.delete("/api/place/delete/:_id", Place.delete);
}