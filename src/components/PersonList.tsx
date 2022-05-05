import React from "react";

type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <div>
          <p>
            {name.first} {name.last}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PersonList;
