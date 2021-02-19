import React from 'react';
import { Route } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import User from '../User/User';
import NavBar from '../../components/TuxComponents/layouts/NavBar'
import authService from '../../services/authService';
import Landing from '../Landing/Landing';
import PreviewActivity from '../PreviewActivity/PreviewActivity';
import IndexActivities from '../IndexActivities/IndexActivities';
import './App.css';
import Manager from '../Manager/Manager';
import Activity from '../Activity/Activity';

import ManagerContextProvider from '../../contexts/ManagerContext';
import SessionContextProvider from '../../contexts/SessionContext';
import Timer from 'react-compound-timer';

// !A temporary list of activity route names and their ids. Below you will see this variable being mapped through and rendering the Activity Routes. This way when we have multiple activities the Routes will be dynamically generated, and we just have to store these properties on the activities themselves or the User object if we want to restrict the user to only seeing the activities that have been assigned to them.
const activities = [{ name: 'heuristics', id: '6009f75ea00e3f38a7c65c7d' }];

const App = () => {
  return (
    <>
      {/* // ! Made a copy of NavBar outside of the TuxComponents folder and inside of the components folder to ensure that if we remove the TuxComponents that our Nav component doesnt disappear. */}
      {/* // TODO: Make sure to only render the NavBar on the pages that need it. The Landing page will not need a NavBar. */}
      <NavBar />

      {/* //TODO: The base route should direct you to the landing page and once the user is logged in redirect to the users homepage. */}
      {/* <Route
        exact
        path="/"
        render={() => (!user ? <User user={user} /> : <Landing />)}
      /> */}

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

      <Route
        exact
        path="/manager-dashboard"
        render={() => (
          <ManagerContextProvider>
            <Manager />
          </ManagerContextProvider>
        )}
      />
      {/* // !Mapping through the activities array to dynamically render Activity Routes. */}
      {activities.length > 0 &&
        activities.map((activity, index) => (
          <Route
            exact
            path={`/activity/${activity.name}`}
            render={() => (
              <Timer initialTime={0} startImmediately={false}>
                {(timerProps) => (
                  <SessionContextProvider
                    activityId={activity.id}
                    timerProps={timerProps}
                  >
                    <Activity />
                  </SessionContextProvider>
                )}
              </Timer>
            )}
          />
        ))}
    </>
  );
};

export default App;
