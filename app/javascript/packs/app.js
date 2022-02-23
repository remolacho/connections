import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';

import Router from "./router"
import Symbols from "components/shared/symbols"

export default function App(){
  return (
    <BrowserRouter>
      <Router />
      <Symbols />
    </BrowserRouter>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
