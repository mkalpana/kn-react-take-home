// @flow
import React, { Component } from 'react';
import { MediaCard } from './components';
import tile from './img/tile.jpg';
import logo from './img/logo.png';

class App extends Component<{}> {
  render() {
    return (
      <div>
        <section>
          <MediaCard
            image={tile}
            imageAltText="Home and Away"
            logo={logo}
            logoAltText="Seven"
            description="Home and Away"
          />
        </section>
      </div>
    );
  }
}

export default App;
