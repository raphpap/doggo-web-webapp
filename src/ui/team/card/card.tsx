// Vendor
import React from 'react';
import styled from 'react-emotion';

// Context
import {Card as CardType} from 'doggo-web-webapp/ui/@context';

// Elements
const CardContainer = styled.li`
  display: flex;
  max-height: 80px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  margin: 8px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 120px;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
`;

const Info = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 24px;
  color: rgba(255, 255, 255, 0.8);
`;

// Types
interface Props {
  card: CardType;
}

export const Card: React.SFC<Props> = ({card}) => {
  const {name, hp, image} = card;

  return (
    <CardContainer>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>

      <Info>
        <div>{name}</div>
        <div>{hp} hp</div>
      </Info>
    </CardContainer>
  );
};

export default Card;
