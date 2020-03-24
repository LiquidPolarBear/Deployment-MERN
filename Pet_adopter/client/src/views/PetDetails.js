import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Link, navigate} from '@reach/router'
import PetTable from '../components/PetTable';

export default (props) => {
    const {id} = props
    const [pet, setPet] = useState([])
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pet/' + id)
        .then(res=>{
            console.log(res.data)
            setPet(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(err.data))
    }, []);

        // const { petId, successCallback } = props;
        const deleteHandler = e => {
            axios.delete('http://localhost:8000/api/pet/' + id)
            .then(res=>{
                console.log(res)
                navigate('/')
                    // successCallback();
                })
        }
    

    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to="/">back to home</Link>
            <button onClick={deleteHandler}>Adopt {pet.name}</button>
            <h3>Details about: {pet.name}</h3>
            <h2>Pet Type: {pet.type}</h2>
            <h2>Description: {pet.description}</h2>
            <h2>Skills: {pet.skill1}, {pet.skill2}, {pet.skill3}</h2>
        </div>
    )


}