// Vendor
import React from 'react';
import styled from 'react-emotion';

// Context
import {Card} from 'doggo-web-webapp/ui/@context';

// Shared Components
import SmallCard from 'doggo-web-webapp/ui/@components/small-card';

// Elements
const CardsList = styled.ul`
  min-width: 320px;
  max-width: 800px;
  padding: 0;
`;

// Types
interface Props {
  cards: Card[];
  onCardSelect: (card: Card) => void;
}

export class CardSelection extends React.Component<Props> {
  public render() {
    const {cards, onCardSelect} = this.props;

    return (
      <CardsList>
        {cards.map((card, index) => (
          <SmallCard key={index} card={card} onCardClick={(card: Card) => {onCardSelect(card)}}/>
        ))}
      </CardsList>
    );
  }
};

export default CardSelection;
