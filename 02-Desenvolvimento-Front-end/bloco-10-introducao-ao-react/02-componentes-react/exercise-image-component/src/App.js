import React from 'react';
import Image from './component/Image';
import staringCat from './img/staringCat.jpg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <Image source={ staringCat } alternativeText="Cute cat staring" />
      </main>
    );
  }
}

export default App;
