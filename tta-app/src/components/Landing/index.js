import 'core-js/es/array';
import * as ROUTES from '../../constants/routes';
import React, { Component } from 'react';
const SerpWow = require('google-search-results-serpwow');
let serpwow = new SerpWow('7DFD15F3226843DCB967BDC20BA2D6F3');
const axios = require('axios').default;
var fs = require("fs");

class Landing extends Component {

// constructor(props){
//   super(props);
//   this.handleCall = this.handleCall.bind(this);
// }

handleCall(params) {
  serpwow.json(params)
  .then(result => {
    console.log(JSON.stringify(result, 0, 2));
    console.log(result.search_information.query_displayed)
  })
  .catch(error => {
    console.log(error);
  });
}

submitFile = event => {

  console.log(event.target.files[0]);
  alert("Successful upload!");
  this.props.history.push(ROUTES.ART);

}
  
  render() { 
    return ( 
      <div className="container">
        <div className="container">
          <h1 style={{textAlign: "center"}}>Take/Upload a picture of the artwork</h1>
        <label className="custom-file-upload">
          <input onChange={this.submitFile} type="file"style={{display: "none"}}/> 
          <i className="fas fa-camera" style={{fontSize: "9rem"}}></i>
          <br></br>
          Click here to take a Photo!
        </label>    
        {/* <button  class = "btn btn-light btn-sm" onClick={() => this.handleCall(this.state.params)}>Click me!</button> */}
        </div>
      </div>
     );
  }
}

export default Landing;