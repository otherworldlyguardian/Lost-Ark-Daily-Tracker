import React from 'react'
import { Navbar } from 'react-bulma-components'
import Countdowns from './Select'

function Nav() {
  return (
    <div className="Nav">
      <Navbar color="dark">
          <p id='time-tester'></p>
          {/* <Countdowns /> */}
        <Navbar.Burger active>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </Navbar.Burger>  
      </Navbar>
    </div>
  )
}

export default Nav