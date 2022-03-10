import React from 'react'
import { Navbar, Button } from 'react-bulma-components'

function App() {
  return (
    <div className="App">
      <Navbar>
        < Navbar.Item href="#" hoverable>
          <Navbar.Link>Item</Navbar.Link>
          <Navbar.Dropdown>
            <Navbar.Item href="#">Subitem 1</Navbar.Item>
            <Navbar.Item href="#">Subitem 2</Navbar.Item>
          </Navbar.Dropdown>
        </Navbar.Item>
        < Navbar.Item href="#">
          <Navbar.Link>Item</Navbar.Link>
          <Navbar.Dropdown>
            <Navbar.Item href="#">Subitem 1</Navbar.Item>
            <Navbar.Item href="#">Subitem 2</Navbar.Item>
          </Navbar.Dropdown>
        </Navbar.Item>
        < Navbar.Item href="#">
          <Navbar.Link>Item</Navbar.Link>
          <Navbar.Dropdown>
            <Navbar.Item href="#">Subitem 1</Navbar.Item>
            <Navbar.Item href="#">Subitem 2</Navbar.Item>
          </Navbar.Dropdown>
        </Navbar.Item>
      </Navbar>
      <Button color="primary">
        Hello React - Test
      </Button>
    </div>
  )
}

export default App