import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router'

const PlaceForm = props => {

    const[name, setName] = useState("");
    const[type, setType] = useState("");
    const[note, setNote] = useState("");
    const[errors, setErrors] = useState({});

    const create = e => {
        e.preventDefault();
        const newPlace = {name, type, note};

        axios.post("http://localhost:8000/api/place/new", newPlace)
            .then(res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/places");
                }
            }).catch(err => console.log(err));
    }

    return (
        <form onSubmit={ create }>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="form-group text-white">
                            <label>Name of Place</label>
                            <input type="text" className="form-control" onChange={ e => setName(e.target.value)} />
                            {errors.name ? <p className="text-danger">{errors.name.properties.message}</p>: ""}
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="form-group text-white">
                            <label>Type</label>
                            <input type="text" className="form-control" onChange={ e => setType(e.target.value)}/>
                            {errors.type ? <p className="text-danger">{errors.type.properties.message}</p>: ""}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group text-white">
                            <label>Notes</label>
                            <input type="text" className="form-control" onChange={ e => setNote(e.target.value)} />
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary btn-block mb-5 mr-2 ml-2" value="Add Place"/>
                </div>
            </div>
        </form>
    )

}

export default PlaceForm;