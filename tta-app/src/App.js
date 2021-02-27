import 'core-js/es/array';
import './App.css';
import React, { Component } from 'react';
const SerpWow = require('google-search-results-serpwow')
let serpwow = new SerpWow('7DFD15F3226843DCB967BDC20BA2D6F3')

class App extends Component {

// retrieve the search results as JSON

constructor(props){
  super(props);
  this.handleCall = this.handleCall.bind(this);
}

handleCall(params) {
  serpwow.json(params)
  .then(result => {
    // pretty-print the JSON result
    console.log(JSON.stringify(result, 0, 2));
  })
  .catch(error => {
    console.log(error);
  });
}

  state = {params : {
    image_url: 'https://i.postimg.cc/1RBYcRhw/Starry-night-art-image.jpg',
    search_type: 'reverse_image_search'
  } }
  render() { 
    return ( 
      <div>
        <h1>Hello World</h1>
        <button onClick={() => this.handleCall(this.state.params)}>Click me!</button>
      </div>
     );
  }
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
