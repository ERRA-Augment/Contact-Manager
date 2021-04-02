import React from 'react'
import '.././css/Newcontact.css'

function Newcontact(props) {
    console.log(props);
    return (
        <div>
            {props.count}            
            <div className="newcontact" id={`new__contact__${props.count}`} ><h3>{' ' + props.value}</h3></div>
        </div>
    )
}

export default Newcontact
