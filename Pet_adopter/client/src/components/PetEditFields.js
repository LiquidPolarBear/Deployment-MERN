import React, {useState, useEffect} from 'react';
import { Link, navigate } from '@reach/router'
import axios from 'axios'
export default (props) => {
const {id} = props
const [errors, setErrors] = useState([]); 
const [name, setName] = useState();
const [type, setType] = useState();
const [description, setDescription] = useState();
const [skill1, setSkill1] = useState();
const [skill2, setSkill2] = useState();
const [skill3, setSkill3] = useState();
useEffect(() => {
    axios.get('http://localhost:8000/api/pet/' + id)
        .then(res => {
            setName(res.data.name);
            setType(res.data.type);
            setDescription(res.data.description);
            setSkill1(res.data.skill1);
            setSkill2(res.data.skill2);
            setSkill3(res.data.skill3);
        })
}, [])

const updatePet = e => {
    e.preventDefault();
    axios.put('http://localhost:8000/api/pet/' + id + '/edit', {name:name, type:type, description:description, skill1:skill1, skill2:skill2, skill3:skill3})
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err=>{const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);})

}

    return(
        <div>
            <form onSubmit={(e) => { updatePet(e)}}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <label>Name:</label><br/>
                <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }}></input><br/>
                <label>Pet Type:</label><br/>
                <input type="text" name="type" value={type} onChange={(e) => { setType(e.target.value) }}></input><br/>
                <label>Pet Description:</label><br/>
                <input type="text" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }}></input><br/>
                <label>Skill 1:</label><br/>
                <input type="text" name="skill1" value={skill1} onChange={(e) => { setSkill1(e.target.value) }}></input><br/>
                <label>Skill 2:</label><br/>
                <input type="text" name="skill2" value={skill2} onChange={(e) => { setSkill2(e.target.value) }}></input><br/>
                <label>Skill 3:</label><br/>
                <input type="text" name="skill3" value={skill3} onChange={(e) => { setSkill3(e.target.value) }}></input><br/>
                <input type="submit" value="Edit" />
            </form>
        </div>
    )
}