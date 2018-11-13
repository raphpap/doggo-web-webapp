// Vendor
import React from 'react';

// Context
import {Card} from 'doggo/context';

// Shared Components
import Modal from 'doggo/ui/@components/modal';

// Component
import CardSelection from './card-selection';

// Types
interface Props {
  cards: Card[];
  isOpen: boolean;
  onCardSelect: (card: Card) => void;
  onClose: () => void;
}

export class CardSelectionModal extends React.Component<Props> {
  public render() {
    const {cards, isOpen, onCardSelect, onClose} = this.props;

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <CardSelection cards={cards} onCardSelect={onCardSelect} />
      </Modal>
    );
  }
}

export default CardSelectionModal;
