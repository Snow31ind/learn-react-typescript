import React, { useEffect, useRef } from 'react';

type Props = {};

const DomRef = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef}></input>
    </div>
  );
};

export default DomRef;
