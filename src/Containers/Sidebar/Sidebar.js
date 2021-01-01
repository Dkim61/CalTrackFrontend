import React, { Component } from 'react';
import './sidebar.css'
import HomeComponent from '../../icons/home.svg'
import Calendar from '../../icons/calendar.svg'
import Home from '../../icons/home.svg'
import PlusSymbol from '../../icons/plus-symbol.svg'
import { BrowserRouter, Link, Route, NavLink } from 'react-router-dom';


class Sidebar extends Component {

    clickHandler = (e) => {
        console.log(e.target)
    }

    render() {
        return (

            <div className="sidebar">
                <div className="icon-container">
                    <NavLink to='/profile'>
                        <button className="profile-btn"><img height='32px' width='32px' src={Home} alt="Profile" /></button> 
                    </NavLink>
                    
                    <NavLink to='/add'>
                        <button className="add-btn"><img height='32px' width='32px' src={PlusSymbol} alt="+" /></button> 
                    </NavLink> 

                    <NavLink to='/consumptions'>
                        <button className="consumtions-btn"><img height="32px" width="32px" src={Calendar} alt="Social Media" /></button> 
                    </NavLink>
                </div>
                
            </div>

        );
    }
}

export default Sidebar;
