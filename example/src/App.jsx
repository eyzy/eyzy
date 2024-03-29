import React from 'react'
import 'eyzy/style.css'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"

import Button from './components/ExampleButton'
import Input from './components/ExampleInput'
import Tabs from './components/ExampleTabs'
import Tag from './components/ExampleTag'
import Checkbox from './components/ExampleCheckbox'
import Switch from './components/ExampleSwitch'
import Radio from './components/ExampleRadio'

export default function App() {
    return (
      <div className="app">
          <Router>
            <ul className="app-nav">
              <li><NavLink to="/button">Button</NavLink></li>
              <li><NavLink to="/input">Input</NavLink></li>
              <li><NavLink to="/checkbox">Checkbox</NavLink></li>
              <li><NavLink to="/radio">Radio</NavLink></li>
              <li><NavLink to="/tabs">Tabs</NavLink></li>
              <li><NavLink to="/tag">Tag</NavLink></li>
              <li><NavLink to="/switch">Switch</NavLink></li>
            </ul>

            <div className="app-container">
              <Route exact path="/button" component={Button} />
              <Route exact path="/input" component={Input} />
              <Route exact path="/checkbox" component={Checkbox} />
              <Route exact path="/radio" component={Radio} />
              <Route exact path="/tag" component={Tag} />
              <Route exact path="/tabs" component={Tabs} />
              <Route exact path="/switch" component={Switch} />
            </div>
          </Router>
      </div>
    )
}