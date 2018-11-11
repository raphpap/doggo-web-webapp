// Vendor
import React from 'react';
import styled from 'react-emotion';

// Context
import {Card as CardType} from 'doggo-web-webapp/context';

// Elements
const CardContainer = styled.div`
  width: 300px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  margin: 8px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Info = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px 24px;
  color: rgba(255, 255, 255, 0.8);
`;

const Stats = styled.div`
  color: rgba(255, 255, 255, 0.6);
`;

// Types
interface Props {
  card: CardType;
}

export const BigCard: React.SFC<Props> = ({card}) => {
  const {attack, defense, hp, name, image} = card;

  return (
    <CardContainer>
      <Image src={image} />

      <Info>
        <div>{name}</div>
        <Stats>
          {hp}
          hp {attack}
          atk {defense}
          def
        </Stats>
      </Info>
    </CardContainer>
  );
};

export default BigCard;
