import React from 'react';

type GreetProps = {
  name: string;
  count?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { count = 0 } = props;

  return (
    <div>
      {props.isLoggedIn ? (
        <div>
          Greet {props.name} {count} times
        </div>
      ) : (
        <div>Greet guest</div>
      )}
    </div>
  );
};

export default Greet;
