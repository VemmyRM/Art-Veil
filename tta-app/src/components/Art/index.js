import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { Navbar,Nav } from 'react-bootstrap'
import artInfo from './artInfo.js'; //with path
import { TIMEOUT } from 'dns';
const SerpWow = require('google-search-results-serpwow');
let serpwow = new SerpWow(KEY)

//title
//image
//year
//painter
//location
//painting technique
//cultural impact
const ArtDisplay = (props) => {
  return (
    <div className = "container" style={{backgroundColor:"white",}}>
       <center>
       <h1><center class="mt-5">Welcome to Art Veil!</center></h1>
{/* <h2>Title: {art.title}</h2> */}
  <img style={{height:"10%", width:"50%"}} src= "https://everwideningcircles.com/wp-content/uploads/2018/05/starry-night-1093721_1920.jpg"></img>
  </center>
  <p><b>Year:</b> 1889</p>
  <p><b> Painter:</b> Vincent Van Gogh</p>
  <p><b> Medium:</b> Oil on Canvas</p>
  <p><b> Location:</b> Museum of Modern Art</p>
  <p><b> Painting Technique: </b> This morning I saw the countryside from my window a long time before sunrise, 
  with nothing but the morning star, which looked very big,” wrote van Gogh to his brother Theo, describing his 
  inspiration for one of his best-known paintings, The Starry Night (1889).3 The window to which he refers was 
  in the Saint-Paul asylum in Saint-Rémy, in southern France, where he sought respite from his emotional suffering 
  while continuing to make art.  This mid-scale, oil-on-canvas painting is dominated by a moon- and star-filled 
  night sky. It takes up three-quarters of the picture plane and appears turbulent, even agitated, with intensely 
  swirling patterns that seem to roll across its surface like waves. It is pocked with bright orbs—including the 
  crescent moon to the far right, and Venus, the morning star, to the left of center—surrounded by concentric 
  circles of radiant white and yellow light.
        Beneath this expressive sky sits a hushed village of humble houses surrounding a church, whose steeple 
        rises sharply above the undulating blue-black mountains in the background. A cypress tree sits at the 
        foreground of this night scene. Flame-like, it reaches almost to the top edge of the canvas, serving as 
        a visual link between land and sky. Considered symbolically, the cypress could be seen as a bridge between 
        life, as represented by the earth, and death, as represented by the sky, commonly associated with heaven. 
        Cypresses were also regarded as trees of the graveyard and mourning. “But the sight of the stars always
         makes me dream,” van Gogh once wrote. “Why, I say to myself, should the spots of light in the firmament 
         be less accessible to us than the black spots on the map of France? Just as we take the train to go to 
         Tarascon or Rouen, we take death to go to a star.”4
      The Starry Night is based on van Gogh’s direct observations as well as his imagination, memories, and 
        emotions. The steeple of the church, for example, resembles those common in his native Holland, not in France. 
        The whirling forms in the sky, on the other hand, match published astronomical observations of clouds of dust
         and gas known as nebulae. At once balanced and expressive, the composition is structured by his ordered 
         placement of the cypress, steeple, and central nebulae, while his countless short brushstrokes and thickly 
         applied paint set its surface in roiling motion. Such a combination of visual contrasts was generated by an 
         artist who found beauty and interest in the night, which, for him, was “much more alive and richly colored than 
         the day.</p>
  <p><b>Cultural Impact: </b>The oil-on-canvas painting is dominated by a night sky roiling with chromatic blue swirls, a glowing yellow crescent moon, and stars rendered as radiating orbs. One or two cypress trees, often described as flame-like, tower over the foreground to the left, their dark branches curling and swaying to the movement of the sky that they partly obscure. Amid all this animation, a structured village sits in the distance on the lower right of the canvas. Straight controlled lines make up the small cottages and the slender steeple of a church, which rises as a beacon against rolling blue hills. The glowing yellow squares of the houses suggest the welcoming lights of peaceful homes, creating a calm corner amid the painting’s turbulence.Van Gogh painted The Starry Night during his 12-month stay at the Saint-Paul-de-Mausole asylum near Saint-Rémy-de-Provence, France, several months after suffering a breakdown in which he severed a part of his own ear with a razor. While at the asylum, he painted during bursts of productivity that alternated with moods of despair. As an artist who preferred working from observation, van Gogh was limited to the subjects that surrounded him—his own likeness, views outside his studio window, and the surrounding countryside that he could visit with a chaperone.</p>

</div>
  );
}

const ArtNotDisplay = () => {
  return (
    <center>
  <div className="d-flex justify-content-center spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
  <span className="visually-hidden">Loading...</span>
</div>
</center>
  );
}

class ArtPage extends Component{
  constructor(props) {
    super(props);
  //   this.state = { 
  //     title:null
  //  };
  }

  state = {
    params : {
      //starry night: https://i.postimg.cc/bNpsgkMJ/Starry-night-art-image.jpg
      //earring girl: https://i.postimg.cc/tgH3JPsH/Girl-with-a-Pearl-Earring-image.png
      //mona lisa: https://i.postimg.cc/vHtXJbXz/Mona-Lisa-Image.png
    image_url: 'https://i.postimg.cc/bNpsgkMJ/Starry-night-art-image.jpg',
    search_type: 'reverse_image_search'
  },
  title: null
}


  componentDidMount () {
    // console.log(artInfo)
    // serpwow.json(this.state.params)
    // .then(result => {
    //   console.log(result.search_information.query_displayed)
    //   this.setState({title: result.search_information.query_displayed});
    // })
    // .catch(error => {
    //   console.log(error);
    // });
setTimeout( () => {this.setState({title: "Starry night"});}, 3000);
  }

render()
    {
      if (this.state.title==null) {
        return (
          <ArtNotDisplay/>
        )
      }
      else {
        return (
          <ArtDisplay titleState = {this.state.title}/>
        )
      }
  }
}

export default ArtPage;