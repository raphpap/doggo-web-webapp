// Vendor
import React from 'react';
import {compose} from 'recompose';

// Vendor Types
import {RouteComponentProps, withRouter} from 'react-router';

// Assets
import logo from 'doggo/assets/images/team-logo.png';

// Context
import {
  Card,
  withApplicationContext,
  WithApplicationContextProps
} from 'doggo/context';

// Utilities
import findCard from 'doggo/utilities/find-card';

// Shared Components
import BigCardModal from 'doggo/ui/@components/big-card-modal';
import CardsContainer from 'doggo/ui/@components/cards-container';
import Logo from 'doggo/ui/@components/logo';
import Message from 'doggo/ui/@components/message';
import SmallCard from 'doggo/ui/@components/small-card';

// Types
interface Props {
  cardId?: string;
}
type EnhancedProps = Props &
  WithApplicationContextProps &
  RouteComponentProps<never>;

const enhance = compose<EnhancedProps, Props>(
  withApplicationContext,
  withRouter
);

export class Team extends React.Component<EnhancedProps> {
  public render() {
    const {cardId} = this.props;
    const {cards} = this.props.context.state;

    if (!cards) {
      return <Message>Loading...</Message>;
    }

    const card = findCard(cardId || '', cards);
    const selectedCard = card ? card : null;

    return (
      <>
        <Logo logo={logo} height={'80px'} marginUnits={0} />

        <CardsContainer>
          {cards.map((card, index) => (
            <SmallCard
              key={index}
              card={card}
              onCardClick={(card: Card) => {
                this.openModal(card.id);
              }}
            />
          ))}
        </CardsContainer>

        <BigCardModal card={selectedCard} onClose={this.closeModal} />
      </>
    );
  }

  private openModal = (cardId: string) => {
    this.props.history.replace(`/team/card/${cardId}`);
  };

  private closeModal = () => {
    this.props.history.replace('/team');
  };
}

export default enhance(Team);
