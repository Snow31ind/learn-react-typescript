import React, { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

type Props = {};

const User = ({}: Props) => {
  // type assertion
  // I know better than you, TypeScript compiler
  // user here is never null
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const loginHandler = () => {
    setUser({
      name: 'example',
      email: 'example@gmail.com',
    });
  };

  return (
    <div>
      <button onClick={loginHandler}>Login</button>
      <p>{user.name} is logged in</p>
      <p>{user.email} is logged out</p>
    </div>
  );
};

export default User;
