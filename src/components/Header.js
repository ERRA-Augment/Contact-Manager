import React from 'react'
import ".././css/Header.css"
import ContactsRoundedIcon from '@material-ui/icons/ContactsRounded';

function Header() {
    return (
        <div className="header">
            <h1>Contact Manager</h1>
            <h2><ContactsRoundedIcon /></h2>
        </div>
    )
}

export default Header
