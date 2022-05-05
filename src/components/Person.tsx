import React from "react";

type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

const Person = (props: PersonProps) => {
  return (
    <div>
      <p>
        {props.name.first} {props.name.last}
      </p>
    </div>
  );
};

export default Person;
