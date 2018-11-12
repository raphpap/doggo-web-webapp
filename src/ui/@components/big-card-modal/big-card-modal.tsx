// Vendor
import React from 'react';

// Context
import {Card as CardType} from 'doggo/context';

// Components
import BigCard from 'doggo/ui/@components/big-card';
import Modal from 'doggo/ui/@components/modal';

// Types
interface Props {
  card: CardType | null;
  onClose: () => void;
}

export const BigCardModal: React.SFC<Props> = ({card, onClose}) => {
  return (
    <Modal isOpen={!!card} onClose={onClose}>
      {card && <BigCard card={card} />}
    </Modal>
  );
};

export default BigCardModal;
