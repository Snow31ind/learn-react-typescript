import React from "react";

type GreetProps = {
  name: string;
  count: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <div>
          Greet {props.name} {props.count} times
        </div>
      ) : (
        <div>Greet guest</div>
      )}
    </div>
  );
};

export default Greet;
