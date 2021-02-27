import 'core-js/es/array';
//import './App.css';
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
    // pretty-print the JSON result
    console.log(JSON.stringify(result, 0, 2));
    console.log(result.search_information.query_displayed)
  })
  .catch(error => {
    console.log(error);
  });
}

// submitFile = event => {
// }

// //PHPSESSID=rthvrjbpudidf1cqcbbcml7l96

// componentDidUpdate() {
//   // POST request using axios with error handling

//   console.log(this.state.source.type);




//   const headers = {
//     // 'Access-Control-Allow-Headers': "*",
//     // 'authority':'imgbb.com',
//     'Content-Type':"multipart/form-data",
//     'cookie':document.cookie,
//     // 'origin':'https://imgbb.com',
//     // 'referer':'https://imgbb.com/',
//     // 'sec-ch-ua':'"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
//     // 'sec-ch-ua-mobile':'?0',
//     // "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36"
//     "Host":"https://sheltered-bayou-14417.herokuapp.com/"
//   }

//   const body = {
//     'source' : this.state.source,
//     'type': 'file',
//     'action': 'upload',
//     'auth_token': "ea04e1a6307eeb4fa5a1fea47f97136c1d127d8f",

//   }
  
//   axios.post('https://imgbb.com/json', body, {headers: headers}, {xhrFields: {
//     withCredentials: true}
//  })
// .then((res) => {
//   console.log("RESPONSE RECEIVED: ", res);
// })
// .catch((err) => {
//   console.log("AXIOS ERROR: ", err);
// })

//  // const article = { title: 'React POST Request Example' };
//   // axios.post('https://imgbb.com/json', headers)
//   //     .then(response => this.setState({ 
//   //       // articleId: response.data.id }))
//   //        console.log("RESPONSE RECEIVED: ", res);
//   //     .catch(error => {
//   //         // this.setState({ errorMessage: error.message });
//   //         // console.error('There was an error!', error);
//   //         console.log("AXIOS ERROR: ", err);
//   //     });
// }
  
  state = {
    params : {
    image_url: 'https://i.postimg.cc/bNpsgkMJ/Starry-night-art-image.jpg',
    search_type: 'reverse_image_search'
  },
  source: null
}
  render() { 
    return ( 
      <div>
        <input  onChange= {this.submitFile} type="file"></input>
        <button >Submit!</button>
        <h1>Hello World</h1>
    
    
    <button onClick={() => this.handleCall(this.state.params)}>Click me!</button>
        <button>Hello</button>
        </div>
     );
  }
}

export default Landing;