import React from 'react';
import './Layout.scss';
import { Route, Switch } from 'react-router-dom';
import UserLogin from  '../pages/authentication/UserLogin';
import UserRegister from  '../pages/authentication/UserRegister';
import WorkLogs from  '../pages/Worklogs/WorkLogs';
import PersonalLogs from  '../pages/Personallogs/PersonalLogs';
import Dashboard from '../pages/Dashboard';

const Layout = () => {
    return (
        <div className="layout-container">
                <Switch>

                    <Route path="/" exact component={Dashboard} />

                    <Route path="/login" exact component={UserLogin} />

                    <Route path="/register" exact component={UserRegister} />

                    <Route path="/worklogs" exact component={WorkLogs} />

                    <Route path="/personal" exact component={PersonalLogs} />

                </Switch>

        </div>
    )
}

export default Layout;