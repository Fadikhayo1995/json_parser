import React from 'react';

import TextField from '@mui/material/TextField';

export default props => {
  const { component } = props;

  return <div>
    <TextField
      style={component.style}
      id={component.id}
      text={component.text}
      placeholder={component?.attributes?.placeholder}
    />
  </div>;
}

