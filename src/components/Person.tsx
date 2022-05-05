import React from 'react';
import { PersonProps } from './Person.types';

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
