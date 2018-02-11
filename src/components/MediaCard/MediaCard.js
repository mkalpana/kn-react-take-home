// @flow
import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils';

type Props = {
  image: string,
  imageAltText: string,
  logo: string,
  logoAltText: string,
  description: string,
};

const Container = styled.div`
  position: relative;
`;


const Image = styled.img`
  border: 1em solid #010101;
  box-sizing: border-box;
  width: 768px;
  
  ${media.tablet`
    width: 100%;
  `}
  ${media.phone`
    width: 100%;
  `}
`;

const Title = styled.div`
  position: absolute;
  bottom: 4px;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  background: rgba(24, 24, 24, 0.5);
  width: 48em;
  box-sizing: border-box;
  
  ${media.tablet`
    width: 100%;
  `}
  ${media.phoneLarge`
    width: 100%;
  `}
  ${media.phone`
    width: 100%;
  `}
`;

const Logo = styled.img`
  margin: 0 1em 0 1.5em;
  width: 6.25em;
  height: 6.25em;
  
  ${media.tablet`
    width: 5em;
    height: 5em;
  `}
  ${media.phoneLarge`
    width: 2.625em;
    height: 2.625em;
  `}
  ${media.phone`
    margin: 0 0.75em 0 1.5em;
    width: 2em;
    height: 2em;
  `}
`;

const Description = styled.h2`
  font-size: 3em;
  font-weight: 500;
  color: white;
  
  ${media.tablet`
    font-size: 2em;
  `}
  ${media.phoneLarge`
    font-size: 1.25em;
  `}
  ${media.phone`
    font-size: 1em;
  `}
`;

const MediaCard = (props: Props) => {
  const { image, imageAltText, logo, logoAltText, description } = props;
  return (
    <Container>
      <Image src={image} alt={imageAltText} />
      <Title>
        <Logo src={logo} alt={logoAltText}/>
        <Description>{description}</Description>
      </Title>
    </Container>
  );
};

export default MediaCard;
