import React, {Component} from 'react';
import data from '.././data'

class MainContent extends Component {
  constructor() {
      super()

      this.state = {
          i: 0
      }
      this.handleNext = this.handleNext.bind(this)
      this.handlePrevious = this.handlePrevious.bind(this)
  }
    
  handleNext() {
    let nextCopy = {...this.state}
        if (nextCopy.i <= 23) {
            this.setState({i: nextCopy.i + 1}) 
        } else {
            this.setState({i: 0})
        } 
   }
  
  handlePrevious() {
    let previousCopy = {...this.state}
        if (previousCopy.i >= 1) {
            this.setState({i: previousCopy.i - 1})
        } else {
            this.setState({i: 24})
        }
    }
    

  render() {
  return (
    <div>
    
    <div class='top-gray-box'></div>
    
    <section id='this-is-getting-out-of-hand'>
      <div class='gray-strip' id='gray-strip-left'></div>
      <div class='current-user'>{data[this.state.i].id}/25</div>
      <div class='gray-strip' ></div>
    </section>
    
    <div id='main'>
      <section id='white-box'>
      <h1 class='user-name'>{data[this.state.i].name.first} {data[this.state.i].name.last}</h1>
      <div><span class='bold-this'>From:</span> {data[this.state.i].city}</div>
      <div><span class='bold-this'>Job Title:</span> {data[this.state.i].title}</div>
      <div><span class='bold-this'>Employer:</span> {data[this.state.i].employer}</div>
          <div class='favorite-movies'>Favorite Movies:</div>
            <ol>
                <li>{data[this.state.i].favoriteMovies[0]}</li>
                <li>{data[this.state.i].favoriteMovies[1]}</li>
                <li>{data[this.state.i].favoriteMovies[2]}</li>
            </ol>
      </section>
     
    </div>
      <div id='buttons'>
      <button class='previous' onClick={this.handlePrevious}> &lt; Previous</button>
        <div id='middle-buttons'>
          <button class='edit'>Edit</button>
          <button class='delete'>Delete</button>
          <button class='new'>New</button>
        </div>
      <button class='next' onClick={this.handleNext}>Next &gt;</button>
      </div>
     
    <div class='bottom'>

    </div>
    </div>
  )}
}

export default MainContent
