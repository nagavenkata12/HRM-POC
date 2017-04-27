import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Widget from './Widget';
import CustomIconsExamples from './CustomsIconsExample';
import PessimisticToggleExample from './PessimisticToggle';
import MainMenu from './DashboardMenu';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('appTemplate')
);
ReactDOM.render(
  <MainMenu />,
  document.getElementById('dashboardMenu')
);
ReactDOM.render(
  <Widget />,
  document.getElementById('reactTreeBasic')
);
ReactDOM.render(
  <CustomIconsExamples />,
  document.getElementById('reactTreeCustomIcon')
);
ReactDOM.render(
  <PessimisticToggleExample />,
  document.getElementById('reactTreePessimisticToggle')
);
