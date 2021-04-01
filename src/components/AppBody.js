import React from 'react'
import '.././css/AppBody.css'
import Newcontact from './Newcontact'


function AppBody(props) {
    return (
        <div className="appbody">
            <h1>App Body</h1>
            <button onClick={props.testface}>TEST</button>
        </div>
    )
}

export default AppBody
