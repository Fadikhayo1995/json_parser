import React from 'react';
import Settings from "./resources/settings";
import MainComponent from './components/MainComponent';

const App = props => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }} >
      <MainComponent component={Settings.simulation} />
    </div>
  );
}

export default App;
