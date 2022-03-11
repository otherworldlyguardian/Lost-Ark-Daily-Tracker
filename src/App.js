import React from 'react'
import { Button } from 'react-bulma-components'
import CharacterCard from './Card'
import Nav from './Nav'
import Countdowns from './Select'

function App() {
  return (
    <div className="App">
      <Nav />
      <Button color="primary">
        Create New Character
      </Button>
      <CharacterCard />
    </div>
  )
}

export default App