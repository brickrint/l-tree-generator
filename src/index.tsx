import * as React from 'react';
import * as ReactDOM from "react-dom";

import App from './App';

import { container } from './composition'
import type { SystemBuilder } from './l-system/types'

import "./styles.css";

const builder = container.get<SystemBuilder>();

console.log(
  builder.build({
    initiator: '0',
    iterations: 3,
    rules: {
      '1': '11',
      '0': '1[0]0'
    }
  })
);

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);
