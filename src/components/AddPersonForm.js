import React  from 'react'
import '.././css/AddPersonForm.css'

function AddPersonForm(props) {
    return (
        <div className="addperson">
            <h1 style={{ marginLeft: 5 }}>Add Contact:</h1>
            <div className='textinput'>
                <input type='text' onChange={props.handleChange}/>
            <button className='button' style={{ marginLeft: 5 }} onClick={() => props.handleClick()}>Submit</button>
            </div>
            
        </div>
    )
}

export default AddPersonForm
