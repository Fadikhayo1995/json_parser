import React from 'react';

import Button from '@mui/material/Button';

const ButtonComponent = props => {
  const { component } = props;
  const onClick = () => {
    if (!component.click || !component.click.source_id || !component.click.target_id) return;
    const newValue = document.getElementById(component.click.source_id).value;
    document.getElementById(component.click.target_id).innerText = newValue;
  }
  return <div>
    <Button
      onClick={onClick}
      style={component.style}
      id={component.id}
      placeholder={component?.attributes?.placeholder}
    >
      {component.text}
    </Button>
  </div>
}

export default ButtonComponent;
