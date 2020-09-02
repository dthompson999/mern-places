console.log("place.controller.js");

const Place = require("../models/place.model");


class PlaceController {
    create(req, res) {
        const newPlace = new Place(req.body);
        newPlace.save()
            .then(() => res.json(newPlace))
            .catch(errors => res.json(errors));
    }

    getAll(req, res) {
        Place.find().sort("type")
            .then(place => res.json(place))
            .catch(errors => res.json(errors));
    }

    getOne(req, res) {
        Place.findOne({_id: req.params._id})
            .then(place => res.json(place))
            .catch(errors => res.json(errors));
    }

    update(req, res) {
        Place.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
            .then(() => res.json({msg: "ok"}))
            .catch(errors => res.json(errors));
    }

    delete(req, res) {
        Place.findByIdAndRemove({_id: req.params._id})
            .then(() => res.json({msg: "ok"}))
            .catch(errors => res.json(errors));
    }
}

module.exports = new PlaceController();