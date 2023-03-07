import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function MyCards() {

    const [card, setCard] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/comments')
            .then(res => setCard(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>

           
            <div className="container">
                <div className="row">
                {
                card.map(elem => (

                    <div className="col-4 mt-3 mb-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{elem.id}</h5>
                            <p className="card-text">{elem.name}</p>
                            <p className="card-text">{elem.surName}</p>
                            <p className="card-text">{elem.age}</p>
                        </div>
                    </div>
                </div>
                )
                )
            }
                </div>
            </div>
        </>
    )
}