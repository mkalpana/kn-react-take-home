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
`;

const Title = styled.div`
  position: absolute;
  bottom: 4px;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  background: rgba(24, 24, 24, 0.5);
  width: 768px;
  box-sizing: border-box;
`;

const Logo = styled.img`
  margin: 0 1em 0 1.5em;
  width: 100px;
  height: 100px;
`;

const Description = styled.h2`
  font-size: 48px;
  font-weight: 500;
  color: white;
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
