import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import User from '../User/User';
import * as U from '../../components/TuxComponents/UniversalComponents';
import NavBar from '../../components/TuxComponents/layouts/NavBar';
import authService from '../../services/authService';
import Landing from '../Landing/Landing';
import PreviewActivity from '../PreviewActivity/PreviewActivity';
import IndexActivities from '../IndexActivities/IndexActivities';
import './App.css';
import Manager from '../Manager/Manager';
import Activity from '../Activity/Activity';
import userService from '../../services/userService';

import ActivityContextProvider from '../../contexts/ActivityContext';
import ManagerContextProvider from '../../contexts/ManagerContext';

const App = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const userProfile = await userService.getCurrentUser();
    setUser(userProfile);
  };

  const handleLogout = async () => {
    setUser(null);
    authService.logoutFromGoogle();
  };

  useEffect(() => {
    getUser();
  }, []);

  const NavRoutes = () => {
    // These routes will render the NavBar
    return (
      <>
        <NavBar user={user} handleLogout={handleLogout} />
        <Route exact path="/activities" render={() => <IndexActivities />} />
        {/* <Route exact path="/manager-dashboard" render={() => <Manager />} /> */}
        <Route
          exact
          path="/manager-dashboard"
          render={() => (
            <ManagerContextProvider>
              <Manager />
            </ManagerContextProvider>
          )}
        />
        <Route
          exact
          path="/preview-activity"
          render={({ location }) => <PreviewActivity location={location} />}
        />

        <Route
          exact
          path="/activity/heuristics"
          render={() => (
            <ActivityContextProvider activityId="6009f75ea00e3f38a7c65c7d">
              <Activity />
            </ActivityContextProvider>
          )}
        />
        <Route
          exact
          path="/activity/accessibility"
          render={() => <Activity user={user} />}
        />
      </>
    );
  };
  return (
    <>
      {/* These Routes will not render a Navbar. */}
      <Route
        exact
        path="/"
        render={() => (!user ? <User user={user} /> : <Landing />)}
      />

      <Route
        path="/signup/:groupId?/:email?"
        render={({ history, match }) => (
          <Signup history={history} match={match} />
        )}
      />
      <Route
        exact
        path="/login"
        render={({ history }) => <Login history={history} />}
      />

      {/* These routes will render the NavBar */}
      <Route component={NavRoutes} />
    </>
  );
};

export default App;
