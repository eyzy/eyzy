import React from 'react'
import 'eyzy/style.css'
import { BrowserRouter as Router, Redirect, Route, NavLink } from "react-router-dom"

import Button from './components/Button'
import Input from './components/Input'
import Tabs from './components/Tabs'
import Checkbox from './components/Checkbox'

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
          <Router>
            <ul className="app-nav">
              <li><NavLink to="/button">Button</NavLink></li>
              <li><NavLink to="/input">Input</NavLink></li>
              <li><NavLink to="/tabs">Tabs</NavLink></li>
              <li><NavLink to="/checkbox">Checkbox</NavLink></li>
            </ul>

            <div className="app-container">
              <Redirect from="/" to="/button" />
              <Route exact path="/button" component={Button} />
              <Route exact path="/input" component={Input} />
              <Route exact path="/tabs" component={Tabs} />
              <Route exact path="/checkbox" component={Checkbox} />
            </div>
          </Router>
      </div>
    )
  }
}