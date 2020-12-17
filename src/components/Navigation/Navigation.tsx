import React from 'react';
import './navigation.scss';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation-container">
            
            <NavLink title="Home" activeClassName="active" className="navigator" to='/'>

                <i className="fas fa-home nav-icons"></i>

            </NavLink>

            <NavLink title="Work Logs" activeClassName="active" className="navigator" to='/worklogs'>

                <i className="fas fa-briefcase nav-icons"></i>

            </NavLink>

            <NavLink title="Personal Logs" activeClassName="active" className="navigator" to='/personal'>

            <i className="fas fa-user-check nav-icons"></i>

            </NavLink>

            <div className="theme-changer">

                <i className="fas fa-sun nav-icons"></i>

                {/* <i className="fas fa-moon nav-icons"></i> */}

            </div>

        </div>
    )
}

export default Navigation;