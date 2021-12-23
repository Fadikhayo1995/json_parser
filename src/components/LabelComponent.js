import React from 'react';


export default props => {
  const { component } = props;

  return <div
    style={component.style}
    id={component.id}
  ></div>;
}

