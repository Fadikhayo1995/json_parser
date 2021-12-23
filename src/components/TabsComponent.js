import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MainComponent from './MainComponent';

const TabsComponent = props => {
  const [value, setValue] = React.useState(0)
  const { component: { children, id } } = props;

  const _getChild = () => {
    if (value > children.length - 1 || !children[value] || !children[value].components) return <></>;
    return <>
      {children[value].components.map(item => <MainComponent component={item} />)}
    </>
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div id={id}>
      <Tabs
        value={value}
        onChange={handleChange}>
        {children.map((item, index) => <Tab label={item.title} value={index} />)}
      </Tabs>
      {_getChild()}
    </div >
  );
}

export default TabsComponent;
