// Vendor
import React from 'react';
import styled from 'react-emotion';
import {compose} from 'recompose';

// Vendor Components
import Modal from 'react-responsive-modal';

// Vendor Types
import {RouteComponentProps, withRouter} from 'react-router';

// Context
import {
  Card,
  withApplicationContext,
  WithApplicationContextProps
} from 'doggo-web-webapp/ui/@context';

// Utilities
import findCard from 'doggo-web-webapp/utilities/find-card';

// Shared Components
import BigCard from 'doggo-web-webapp/ui/@components/big-card';
import SmallCard from 'doggo-web-webapp/ui/@components/small-card';

// Elements
const CardsList = styled.ul`
  min-width: 320px;
  max-width: 800px;
  padding: 0;
`;

const Message = styled.p`
  color: rgba(255, 255, 255, 0.8);
`;

const ModalCss = {
  closeIcon: {
    fill: 'rgba(255, 255, 255, 0.8)'
  },
  modal: {
    backgroundColor: '#171820',
    paddingTop: '40px'
  }
};

// Types
interface Props {
  cardId?: string;
}
type EnhancedProps = Props
  & WithApplicationContextProps
  & RouteComponentProps<never>;

const enhance = compose<EnhancedProps, Props>(
  withApplicationContext,
  withRouter
);

export class Team extends React.Component<EnhancedProps> {
  public render() {
    const {cardId, context} = this.props;
    const {state} = context;
    const {cards} = state;

    if (!cards) {
      return <Message>Loading...</Message>;
    }

    const selectedCard = cardId ? findCard(cardId, cards) : null;

    return (
      <>
        <Message>Team</Message>
        <CardsList>
          {cards.map((card, index) => (
            <SmallCard key={index} card={card} onCardClick={(card: Card) => {this.openModal(card.id)}}/>
          ))}
        </CardsList>

        <Modal open={!!selectedCard} onClose={() => {this.closeModal()}} styles={ModalCss} center>
          {selectedCard && <BigCard card={selectedCard} />}
        </Modal>
      </>
    );
  }

  private openModal = (cardId: string) => {
    this.props.history.replace(`/team/card/${cardId}`)
  }

  private closeModal = () => {
    this.props.history.replace('/team');
  }
};

export default enhance(Team);
