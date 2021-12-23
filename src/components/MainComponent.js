import React from 'react';

import TabsComponent from './TabsComponent';
import ButtonComponent from './ButtonComponent';
import LabelComponent from './LabelComponent';

import TextFieldComponent from './TextFieldComponent';
const MainComponent = props => {
  const { component } = props;

  if (!component || !component.base_component) return <></>;
  switch (component.base_component) {
    case "MyTabs":
      return <TabsComponent component={component} />
    case "MyInput":
      return <TextFieldComponent component={component} />
    case "MyButton":
      return <ButtonComponent component={component} />
    case "MyLabel":
      return <LabelComponent component={component} />
    default:
      return <></>
  }
}

export default MainComponent;
