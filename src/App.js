import React, { Component } from 'react';
import NavBar from './Components/NavBar'
import Editor from './Components/Editor'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Editor />
      </div>
    )
  }
}
export default App