// Vendor
import React from 'react';
import styled from 'react-emotion';

// Context
import {Card as CardType} from 'doggo/context';

// Elements
interface CardProps {
  isDefeated: boolean;
  isClickable: boolean;
}

const CardContainer = styled.li`
  display: flex;
  opacity: ${({isDefeated}: CardProps) => (isDefeated ? 0.5 : 1)};
  justify-content: space-between;
  width: 400px;
  height: 80px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  margin: 8px;
  cursor: ${({isClickable}: CardProps) =>
    isClickable ? 'pointer' : 'not-allowed'};
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
  isNotClickable?: boolean;
  onCardClick: (card: CardType) => void;
}

export class SmallCard extends React.Component<Props> {
  public render() {
    const {card, isNotClickable} = this.props;
    const {attack, defense, hpLeft, hpTotal, name, image} = card;

    const cardContainerProps = {
      isClickable: !isNotClickable,
      isDefeated: hpLeft === 0
    };

    return (
      <CardContainer {...cardContainerProps} onClick={this.handleOnCardClicked}>
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
  }

  private handleOnCardClicked = () => {
    const {card, isNotClickable, onCardClick} = this.props;

    if (!isNotClickable) {
      onCardClick(card);
    }
  };
}

export default SmallCard;
