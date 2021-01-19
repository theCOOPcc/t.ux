import React from 'react';
import * as N from '../TuxComponents/NavComponents';
import * as U from '../TuxComponents/UniversalComponents';
 
const NavBar = ({ user, 
                  // handleLogout 
                }) => {
  return (
    <>
      {!user ? (
        <N.NavColor>
        {/* View Not Logged In */}

          {/* Color Bar */}
          <U.ColorBlock tuxBlue></U.ColorBlock>
          <U.ColorBlock tuxYellow></U.ColorBlock>
          <U.ColorBlock tuxWhite></U.ColorBlock>
          <U.ColorBlock tuxGrey></U.ColorBlock>
          <U.ColorBlock tuxBlack></U.ColorBlock>
          <U.ColorBlock tuxRed></U.ColorBlock>

          <N.Nav>
          {/* Logo */}
          <N.NavLink href="/">
            <N.Logo src="/images/logo.png" alt="Tux Logo"></N.Logo>
          </N.NavLink>
          <N.NavLink right href="/login">
            Log In
          </N.NavLink>
          <N.NavLink  href="/signup">
            Sign Up
          </N.NavLink>
        </N.Nav>
        </N.NavColor>
        
      ) : user ?
        <N.NavColor>
          {/* Color Bar */}
          <U.ColorBlock tuxBlue></U.ColorBlock>
          <U.ColorBlock tuxYellow></U.ColorBlock>
          <U.ColorBlock tuxWhite></U.ColorBlock>
          <U.ColorBlock tuxGrey></U.ColorBlock>
          <U.ColorBlock tuxBlack></U.ColorBlock>
          <U.ColorBlock tuxRed></U.ColorBlock>

        <N.Nav>
        {/* Logo */}
        <N.NavLink href="/">

        <N.Logo src="/images/logo.png" alt="Tux Logo"></N.Logo>
        </N.NavLink>

          <N.NavLink  href="/activities">
            Activities
          </N.NavLink>
          <N.NavLink right href=" ">
            {user.firstName}
          </N.NavLink>
          <N.Avatar src={user.avatar} />
          <N.NavLink  href="http://localhost:3001/api/auth/logout" 
          // onClick={handleLogout}
          >
            LogOut
          </N.NavLink>

        </N.Nav>
        </N.NavColor>
      :
      <p>You need a navbar</p>}
    </>
  );
};

export default NavBar;