import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class index extends Component {
    render() {
        return (
            <div>
                <form action="/action_page.php">
                    
                    First name:<br />
                    <input type="text" name="firstname" defaultValue="Mickey" />
                    <br />
                    Last name:<br />
                    <input type="text" name="lastname" defaultValue="Mouse" />
                    <br /><br />

                    <NavLink to ='/home'><input type="submit" /></NavLink> 
                </form>

            </div>
        )
    }
}
