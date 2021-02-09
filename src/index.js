import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './pages/App/App';
import * as serviceWorker from './serviceWorker';
import UserContextProvider from './contexts/UserContext';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <UserContextProvider>
        <Route render={({ history }) => <App history={history} />} />
      </UserContextProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
