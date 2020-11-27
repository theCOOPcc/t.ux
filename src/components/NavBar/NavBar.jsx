import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ user, handleLogout, type, handleSignupOrLogin }) => {
  return (
    <>
      {user ? (
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li>
                <a href=" " className="nav-link">
                  Welcome, {user.name}
                </a>
              </li>
              <li>
                <a href=" " className="nav-link" onClick={handleLogout}>
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li>
                <Link
                  to={{
                    pathname: '/login',
                  }}
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: '/signup',
                    state: { user },
                  }}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
