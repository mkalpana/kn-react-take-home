import React from 'react';
import { shallow } from 'enzyme';
import MediaCard from './MediaCard';
import tile from '../../img/tile.jpg';
import logo from '../../img/logo.png';

it('renders without crashing.', () => {
  shallow(<MediaCard />);
});

it('should match snapshot..', () => {
  const wrapper = shallow(<MediaCard
    image={tile}
    imageAltText="Home and Away"
    logo={logo}
    logoAltText="Seven"
    description="Home and Away"
  />);
  expect(wrapper).toMatchSnapshot();
});
