// Vendor
import React from 'react';
import styled from 'react-emotion';

// Context
import {Card as CardType} from 'doggo/context';

// Elements
interface CardProps {
  isDefeated: boolean;
}

const CardContainer = styled.li`
  display: flex;
  opacity: ${({isDefeated}: CardProps) => (isDefeated ? 0.5 : 1)};
  justify-content: space-between;
  width: 400px;
  height: 80px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  margin: 8px;
  cursor: pointer;
`;

const Image = styled.img`
  display: block;
  width: auto;
  height: 100%;
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
  onCardClick: (card: CardType) => void;
}

export const SmallCard: React.SFC<Props> = ({card, onCardClick}) => {
  const {attack, defense, hpLeft, hpTotal, name, image} = card;
  const isDefeated = hpLeft === 0;

  const cardContainerProps = {
    isDefeated
  };

  return (
    <CardContainer
      {...cardContainerProps}
      onClick={() => {
        onCardClick(card);
      }}
    >
      <Image src={image} />

      <Info>
        <div>{name}</div>
        <Stats>
          {hpLeft}/{hpTotal}
          hp {attack}
          atk {defense}
          def
        </Stats>
      </Info>
    </CardContainer>
  );
};

export default SmallCard;
