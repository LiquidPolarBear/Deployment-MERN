import React, {useEffect, useState} from 'react'
import {Link} from '@reach/router'
import axios from 'axios'
import PetAddFields from '../components/PetAddFields'

export default (props) => {
    const {id} = props
    const [author, setAuthor] = useState([]);
    // useEffect(() => {
    //     axios.post('http://localhost:8000/api/author/' + id)
    //         .then(res => setAuthor(res.data));
    // }, [])
    const createAuthor = authorIterator => {
        axios.post('http://localhost:8000/api/author', authorIterator)
            .then( res=>{
                setAuthor([...author, res.data])
            })
    }
    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to="/">back to home</Link>
            <h3>Know a pet needing a home?</h3>
            <PetAddFields />
        </div>
    )
}