// Vendor
import React from 'react';
import styled from 'react-emotion';
import {compose} from 'recompose';

// Vendor Types
import {RouteComponentProps, withRouter} from 'react-router';

// Assets
import logo from 'doggo-web-webapp/assets/images/team-logo.png';

// Context
import {
  Card,
  withApplicationContext,
  WithApplicationContextProps
} from 'doggo-web-webapp/context';

// Utilities
import findCard from 'doggo-web-webapp/utilities/find-card';

// Shared Components
import BigCardModal from 'doggo-web-webapp/ui/@components/big-card-modal';
import Logo from 'doggo-web-webapp/ui/@components/logo';
import Message from 'doggo-web-webapp/ui/@components/message';
import SmallCard from 'doggo-web-webapp/ui/@components/small-card';

// Elements
const CardsList = styled.ul`
  min-width: 320px;
  max-width: 800px;
  padding: 0;
  margin-top: 0;
`;

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
        <Logo logo={logo} width="120px" marginUnits={0} />

        <CardsList>
          {cards.map((card, index) => (
            <SmallCard
              key={index}
              card={card}
              onCardClick={(card: Card) => {
                this.openModal(card.id);
              }}
            />
          ))}
        </CardsList>

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
