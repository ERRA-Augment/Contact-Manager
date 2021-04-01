import React from 'react'
import '.././css/AddPersonForm.css'

function AddPersonForm(props) {
    return (
        <div className="addperson">
            <h1 style={{ marginLeft: 5 }}>Add Contact:</h1>
            <div className='textinput'>
            <input type='text' />
            <button style={{ marginLeft: 5 }} onClick={props.handleClick}>Submit</button>
            {props.testfacestate.message}
            </div>
            
        </div>
    )
}

export default AddPersonForm
