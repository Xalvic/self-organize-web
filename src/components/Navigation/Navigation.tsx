import React from 'react';
import './navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation-container">
            
            <NavLink activeClassName="active" className="navigator" to='/'>Home</NavLink>

            <NavLink activeClassName="active" className="navigator" to='/worklogs'>Work</NavLink>

            <NavLink activeClassName="active" className="navigator" to='/personal'>Personal</NavLink>

        </div>
    )
}

export default Navigation;