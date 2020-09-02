import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Display = props => {

    const [places, setPlaces] = useState([]);

    const getPlaces = () => {
        axios.get("http://localhost:8000/api/place")
            .then( res => {
                console.log(res);
                setPlaces(res.data)
            })
            .catch( err => console.log(err));
    }

    useEffect( () => {
        getPlaces();
    }, []);

    const remove = _id => {
        console.log(_id);
        axios.delete(`http://localhost:8000/api/place/delete/${_id}`)
            .then( res => {
                console.log(res);
                getPlaces();
            })
            .catch( err => console.log(err));
    }

    return (
        <div>
            <div className="container mt-5">
                <table className="table table-striped table-hover table-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th>Place</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {places.map( (p, i) => 
                        <tr key={i}>
                            <td>{p.name}</td>
                            <td>{p.type}</td>
                            <td>
                                <Link className="btn btn-sm btn-outline-primary mr-2 mt-1 mb-1" to={`/place/${p._id}`}>View</Link>
                                <Link className="btn btn-sm btn-outline-warning mr-2 mt-1 mb-1" to={`/place/update/${p._id}`}>Edit</Link>
                                <button className="btn btn-sm btn-outline-danger mr-2 mt-1 mb-1" onClick={e => remove(p._id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Display;