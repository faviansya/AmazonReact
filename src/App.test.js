import React from 'react';
import ReactDOM from 'react-dom';
import App from './Assets/css/App.css';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
