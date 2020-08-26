import React, { useState } from 'react'
import axios from 'axios'

function CreatePost() {
    const [title, setTitle] = useState('');

    const handleChange = e => {
        setTitle(e.target.value);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        
        await axios.post('http://localhost:4000/posts', {
            title
        })

        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Title</label>
                <input className='form-control' type='text' value={title} onChange={handleChange} />
            </div>
            <button className='btn btn-primary'>Submit</button>
        </form>
    )
}

export default CreatePost