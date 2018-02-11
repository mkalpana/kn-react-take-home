import React from 'react';
import { storiesOf } from '@storybook/react';
import { MediaCard } from '../components';
import tile from '../img/tile.jpg';
import logo from '../img/logo.png';

storiesOf('MediaCard', module)
  .add('default view', () => (
    <MediaCard
      image={tile}
      imageAltText="Home and Away"
      logo={logo}
      logoAltText="Seven"
      description="Home and Away"
    />
  ));
