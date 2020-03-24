import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from '@reach/router'
import PetDeleteButton from './PetDeleteButton';
export default (props) => {

const {removeFromDom} = props;
const [pet, setPet] = useState();
useEffect(() => {
    axios.get('http://localhost:8000/api/allpets')
        .then(res => setPet(res.data));
}, [])



    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Actions</th>
            </tr>
            {props.pet.map((pet, i)=>{
                return <tr key={i}>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td><Link to={`/pets/${pet._id}`}>Details</Link> <Link to={`/pets/${pet._id}/edit`}>Edit</Link>
                {/* <PetDeleteButton petId={pet._id} successCallback={()=>removeFromDom(pet._id)}/> */}
                </td>
            </tr>
            })}
        </table>
    )
}