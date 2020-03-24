import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Link} from '@reach/router'
import PetTable from '../components/PetTable';

export default () => {
    const [pet, setPet] = useState([])
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/allpets')
        .then(res=>{
            console.log(res.data)
            setPet(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(err.data))
    }, []);

    const removeFromDom = petId => {
        setPet(pet.filter(pet => pet._id !== petId))
        console.log("Remove from dom")
        console.log(petId)
    }
    
    

    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to="pets/new">add a pet to the shelter</Link>
            <h3>These pets are looking for a good home</h3>
            <PetTable pet={pet} removeFromDom={removeFromDom}/>
        </div>
    )


}