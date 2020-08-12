import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {
  
  state = {
    text: '',
    textLength: null
  }

  textLengthHandler = (event) => {
    const textArray = event.target.value.split('');
    let tempTextLength = this.state.textLength;

    tempTextLength = textArray.length;
    this.setState({text: event.target.value, textLength: tempTextLength});
  }

  deleteCharHandler = (index) => {
    const text = this.state.text.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({text: updatedText});
  }
  
  render() {

    const charList = this.state.text.split('').map((ch, index) => {
      return <CharComponent 
      character={ch} 
      key={index} 
      click={() => this.deleteCharHandler(index)}/>;
    });

    return (
      <div className="App">
        <input type="text" onChange={(event)=> this.textLengthHandler(event)} value={this.state.text}/>
        <p>Length of text: {this.state.textLength}</p>
        <ValidationComponent textLength={this.state.textLength}/>
        {charList}
      </div>
    );
  }
}

export default App;
