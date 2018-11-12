// Vendor
import React from 'react';
import styled from 'react-emotion';

// Context
import {Card} from 'doggo-web-webapp/context';

// Shared Components
import Modal from 'doggo-web-webapp/ui/@components/modal';
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
  isOpen: boolean;
  onCardSelect: (card: Card) => void;
  onClose: () => void;
}

export class CardSelection extends React.Component<Props> {
  public render() {
    const {cards, isOpen, onCardSelect, onClose} = this.props;

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <CardsList>
          {cards.map((card, index) => (
            <SmallCard
              key={index}
              card={card}
              onCardClick={(card: Card) => {
                onCardSelect(card);
              }}
            />
          ))}
        </CardsList>
      </Modal>
    );
  }
}

export default CardSelection;
