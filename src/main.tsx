import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import App from './App.tsx'

import { settings } from './settings'
import { builder } from './l-system/composition'
import { drawer } from './graphics/drawer/composition'
import { interpreter } from './interpreter/composition'

const system = builder.build(settings)
console.log(interpreter)
const lines = interpreter.translate(system)
lines.forEach((line) => drawer.drawLine(line))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
