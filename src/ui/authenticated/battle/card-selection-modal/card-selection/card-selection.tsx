// Vendor
import React from 'react';

// Context
import {Card} from 'doggo/context';

// Shared Components
import CardsContainer from 'doggo/ui/@components/cards-container';
import SmallCard from 'doggo/ui/@components/small-card';

// Types
interface Props {
  cards: Card[];
  onCardSelect: (card: Card) => void;
}

export class CardSelection extends React.Component<Props> {
  public render() {
    const {cards, onCardSelect} = this.props;

    return (
      <CardsContainer>
        {cards.map((card, index) => (
          <SmallCard
            key={index}
            card={card}
            onCardClick={(card: Card) => {
              onCardSelect(card);
            }}
          />
        ))}
      </CardsContainer>
    );
  }
}

export default CardSelection;
