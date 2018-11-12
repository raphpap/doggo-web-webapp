// Vendor
import React from 'react';

// Context
import {Card as CardType} from 'doggo-web-webapp/context';

// Components
import BigCard from 'doggo-web-webapp/ui/@components/big-card';
import Modal from 'doggo-web-webapp/ui/@components/modal';

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
