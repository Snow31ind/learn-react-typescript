import React, { useContext } from 'react';
import { UserContext } from './UserContext';

type Props = {};

const User = (props: Props) => {
  const { user, setUser } = useContext(UserContext);

  const loginHandler = () => {
    setUser({
      name: 'Quang Tien',
      email: 'example@gmail.com',
    });
  };

  const logoutHandler = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
      <p>{user ? `User name: ${user.name}` : `Undefined`}</p>
      <p>{user ? `User email: ${user.email}` : `Undefined`}</p>
    </div>
  );
};

export default User;
