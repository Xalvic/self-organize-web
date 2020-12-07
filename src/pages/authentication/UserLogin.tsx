import React from 'react'
import { Link } from 'react-router-dom';

const UserLogin = () => {
    return (
        <div className="user-login-container">
            
            <form action="">

                <div className="login-form-field">
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email"/>
                </div>

                <div className="login-form-field">
                    <label htmlFor="password">Password</label>
                    <input type="password"/>
                </div>

                <Link to="/register">Sign Up</Link>

            </form>

        </div>
    )
}

export default UserLogin;