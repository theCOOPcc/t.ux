import React from 'react';
import * as N from '../TuxComponents/NavComponents';
import * as U from '../TuxComponents/UniversalComponents';

const NavBar = ({
  user,
  handleLogout
}) => {
  return (
    <>
      <N.Header>
        {/* Color Bar */}
        <U.ColorBlock tuxBlue></U.ColorBlock>
        <U.ColorBlock tuxYellow></U.ColorBlock>
        <U.ColorBlock tuxWhite></U.ColorBlock>
        <U.ColorBlock tuxGrey></U.ColorBlock>
        <U.ColorBlock tuxBlack></U.ColorBlock>
        <U.ColorBlock tuxRed></U.ColorBlock>

        <N.Nav>
          <N.NavLink href="/">
            <N.Logo src="/images/logo.png" alt="Tux Logo"></N.Logo>
          </N.NavLink>

          {!user ? (
            <>
              <N.NavLink right href="/login">
                Log In
              </N.NavLink>
              <N.NavLink href="/signup">Sign Up</N.NavLink>
            </>
          ) : (
            user && (
              <>
                <N.NavLink right>{user.firstName}</N.NavLink>
                <N.Avatar src={user.avatar} alt="User Profile Pic" />
                <N.NavLink href="/" onClick={handleLogout}>Log Out</N.NavLink>
              </>
            )
          )}
        </N.Nav>
      </N.Header>
    </>
  );
};

export default NavBar;
