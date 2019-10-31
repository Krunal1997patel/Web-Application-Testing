import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react'
import Display from './components/Display';
import Dashboard from './components/Dashboard';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('render is happening', () =>{
  render(<App/>)
});
test('render is happening', () =>{
  render(<Display/>)
});
test('render is happening', () =>{
  render(<Dashboard/>)
});