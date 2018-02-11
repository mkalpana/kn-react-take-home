// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 16px;
    background-color: #0E0E0E;
  }
`;
const rootElem: any = document.getElementById('root');
ReactDOM.render(<App />, rootElem);
