import React from 'react'
import '.././css/AppBody.css'

function AppBody(props) {
    return (
        <div className="appbody">
           <h1>{props.message}</h1>
        </div>
    )
}

export default AppBody
