import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router'

const PlaceForm = props => {

    const[name, setName] = useState("");
    const[type, setType] = useState("");
    const[note, setNote] = useState("");
    const[errors, setErrors] = useState({});

    useEffect( () => {
        axios.get(`http://localhost:8000/api/place/${props._id}`)
            .then(res => {
                console.log(res);
                setName(res.data.name);
                setType(res.data.type);
                setNote(res.data.note);
            }).catch(errors => console.log(errors));
    }, [props._id]);

    const UpdatePlace = e => {
        e.preventDefault();
        const place = {name, type, note};
        axios.put(`http://localhost:8000/api/place/update/${props._id}`, place)
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
        <form onSubmit={ UpdatePlace }>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="form-group text-white">
                            <label>Name of Place</label>
                            <input type="text" className="form-control" onChange={ e => setName(e.target.value)} value={name}/>
                            {errors.name ? <p className="text-danger">{errors.name.properties.message}</p>: ""}
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="form-group text-white">
                            <label>Type</label>
                            <input type="text" className="form-control" onChange={ e => setType(e.target.value)} value={type}/>
                            {errors.type ? <p className="text-danger">{errors.type.properties.message}</p>: ""}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group text-white">
                            <label>Notes</label>
                            <input type="text" className="form-control" onChange={ e => setNote(e.target.value)} value={note}/>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary btn-block mb-5 mr-2 ml-2" value="Update Place"/>
                </div>
            </div>
        </form>
    )

}

export default PlaceForm;