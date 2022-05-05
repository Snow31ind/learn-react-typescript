import React from 'react';

type Props = {
  styles: React.CSSProperties;
};

const Container = (props: Props) => {
  return <div style={props.styles}>Hello</div>;
};

export default Container;
