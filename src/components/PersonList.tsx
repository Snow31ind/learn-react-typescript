import React from 'react';
import { Name } from './Person.types';

type PersonListProps = {
  names: Name[];
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
