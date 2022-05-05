import React, { useState } from 'react';

type Props = {};

const LoggedIn = (props: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
      {isLoggedIn ? <p>User is logged in</p> : <p>User is logged out</p>}
    </div>
  );
};

export default LoggedIn;
