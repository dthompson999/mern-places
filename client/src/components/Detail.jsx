import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link, navigate} from '@reach/router'

const Detail = (props) => {

    const [details, setDetails] = useState({});

    useEffect( () => {
        axios.get(`http://localhost:8000/api/place/${props._id}`)
            .then( res => {
                console.log(res);
                setDetails(res.data);
            })
            .catch(err => console.log(err));
    }, [props._id]);

    const remove = () => {
        axios.delete(`http://localhost:8000/api/place/delete/${props._id}`)
            .then(res => {
                console.log(res);
                navigate("/places");
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="container">
                <div className="card mt-5">
                    <div className="card-header bg-primary text-white">
                        <div className="row">
                            <div className="col mt-2">
                                <Link className="btn btn-success" to={`/place/update/${details._id}`}>Edit</Link>
                            </div>
                            <div className="col mt-2">
                                <h2>{details.name} Details</h2>
                            </div>
                            <div className="col mt-2">
                                <button className="btn btn-danger" onClick={remove}>Remove</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body border-bottom border-primary">
                        <p><span style={{fontWeight: 'bold'}}>Place Type:</span> {details.type}</p>
                        <p><span style={{fontWeight: 'bold'}}>Notes:</span> {details.note}</p>
                        <p><span style={{fontWeight: 'bold'}}>Date added to Places:</span> {moment(details.createdAt).format('MMMM Do YYYY, h:mm a')}</p>
                        {/* <p><span style={{fontWeight: 'bold'}}>Database ID:</span> {details._id}</p> */}
                    </div>
                    <div className="embed-responsive embed-responsive-16by9">
                            <iframe name="gMap"
                                width="450"
                                height="250"
                                frameborder="0" style={{border:0}}
                                src={`https://www.google.com/maps/embed/v1/place?q=${ details.name }&key=AIzaSyD4XOAzAwR9ehNWvcYN_AN_gRvbAbWuT3I&`}>
                            </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;