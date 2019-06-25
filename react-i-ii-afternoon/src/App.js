import React, {Component} from 'react';
import './reset.css'
import './App.css';
import Header from './Components/Header'
import MainContent from './Components/MainContent'

class App extends Component {
  render() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <div></div>
    </div>
  )}
}

export default App;
