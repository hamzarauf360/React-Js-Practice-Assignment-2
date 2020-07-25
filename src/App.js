import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

import './CharComponent/Component.css'





class App extends Component {

  //storing the state to make sure updates are coped up
  state = {
    textLength:0,//initialize the lenth to 0 at first
    text:'',
  }


  //to delete a component
  deleteComponent = (index) =>{

    const newText  = this.state.text.split(''); //convert to chars
    newText.splice(index,1) //remove the char
    const finalText = newText.join(''); //convert back to text
    this.setState({
      text:finalText,
    })

  }
  

  // Handler to detect the text typed in input box

  findLengthOfTextHandler = (event) =>{



      //update the state with new value
      this.setState({
        textLength : event.target.value.length, //update the length
        text:event.target.value, //update the text

      })
  }

  // to give a bit of margin
  
  style= {
    marginTop : "250px",
  }


  render() {


      // now to display the list 

  
  
    const char = (
       
         this.state.text.split('').map((c,index)=>{
            return (
              <CharComponent char ={c} key={index} click={()=>this.deleteComponent(index)}></CharComponent>
            )
         })
       
   )

  


    return (
      <div className="App">
         <input type="text" style={this.style} onChange={this.findLengthOfTextHandler} value={this.state.text}></input>
         <p>Text Length: {this.state.textLength}</p>
         <ValidationComponent len={this.state.textLength}></ValidationComponent>
         {char}

      </div>
    );
  }
}

export default App;
