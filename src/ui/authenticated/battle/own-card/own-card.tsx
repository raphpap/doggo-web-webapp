// Vendor
import React from 'react';

// Context
import {Card} from 'doggo/context';

// Shared Components
import CardsContainer from 'doggo/ui/@components/cards-container';
import SmallCard from 'doggo/ui/@components/small-card';

// Components
import CardSelectionButton from './card-selection-button';

// Types
interface Props {
  onCardClick: (card: Card) => void;
  onCardSelectionClick: () => void;
  ownCard: Card | null;
}

export class OwnCard extends React.Component<Props> {
  public render() {
    const {onCardClick, onCardSelectionClick, ownCard} = this.props;

    return ownCard ? (
      <CardsContainer>
        <SmallCard card={ownCard} onCardClick={onCardClick} />
      </CardsContainer>
    ) : (
      <div>
        <CardSelectionButton onClick={onCardSelectionClick}>
          Choose your fighter
        </CardSelectionButton>
      </div>
    );
  }
}

export default OwnCard;
