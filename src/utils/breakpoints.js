// @flow
import { css } from 'styled-components';

const sizes = {
  desktop: 991,
  tablet: 767,
  phone: 321
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args: any) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;
