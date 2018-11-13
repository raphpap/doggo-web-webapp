// Vendor
import React from 'react';

// Context
import {Card} from 'doggo/context';

// Shared Components
import CardsContainer from 'doggo/ui/@components/cards-container';
import SmallCard from 'doggo/ui/@components/small-card';

// Types
interface Props {
  opponentCard: Card;
  onCardClick: (card: Card) => void;
}

export class OpponentCard extends React.Component<Props> {
  public render() {
    const {onCardClick, opponentCard} = this.props;

    return (
      <CardsContainer>
        <SmallCard card={opponentCard} onCardClick={onCardClick} />
      </CardsContainer>
    );
  }
}

export default OpponentCard;
