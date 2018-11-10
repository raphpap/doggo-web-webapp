// Vendor
import React from 'react';
import styled from 'react-emotion';
import {compose} from 'recompose';

// Vendor Components
import Modal from 'react-responsive-modal';

// Context
import {
  Card,
  withApplicationContext,
  WithApplicationContextProps
} from 'doggo-web-webapp/context';

// Shared Components
import BigCard from 'doggo-web-webapp/ui/@components/big-card';
import SmallCard from 'doggo-web-webapp/ui/@components/small-card';

// Components
import CardSelection from './card-selection';

// Elements
const ActionContainer = styled.button`
  width: 160px;
  height: 160px;
  border: 2px solid #fff;
  border-radius: 50%;
  margin: 60px 0;
  background-color: transparent;
  font-size: 16px;
  color: #fff;
`;

const CardContainer = styled.ul`
  min-width: 320px;
  max-width: 800px;
  padding: 0;
`;

const Message = styled.p`
  color: rgba(255, 255, 255, 0.8);
`;

const CardSelectionButton = styled.button`
  width: 400px;
  height: 80px;
  border: 1px solid #fff;
  margin-top: 16px;
  background-color: transparent;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
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
interface Props {}

type EnhancedProps = Props
  & WithApplicationContextProps;

interface State {
  selectedCard: Card | null,
  showCardSelectionModal: boolean;
  showModalCard: Card | null;
}

const enhance = compose<EnhancedProps, Props>(
  withApplicationContext
);

export class Battle extends React.Component<EnhancedProps, State> {
  public readonly state: State = {
    selectedCard: null,
    showCardSelectionModal: false,
    showModalCard: null
  }

  public render() {
    const {selectedCard, showCardSelectionModal, showModalCard} = this.state;
    const {context} = this.props;
    const {state} = context;
    const {cards, nextOpponent} = state;

    if (!cards || !nextOpponent) return <Message>Loading...</Message>;

    return (
      <>
        <Message>Battle</Message>

        <CardContainer>
          <SmallCard card={nextOpponent} onCardClick={(card: Card) => this.openCardModal(card)}/>
        </CardContainer>

        <div>
          <ActionContainer>
            VS
          </ActionContainer>
        </div>

        {selectedCard ? (
          <CardContainer>
            <SmallCard card={selectedCard} onCardClick={(card: Card) => this.openCardModal(card)}/>
          </CardContainer>
        ) : (
          <div>
            <CardSelectionButton onClick={() => {this.openCardSelectionModal()}}>
              Choose your fighter
            </CardSelectionButton>
          </div>
        )}

        <Modal open={showCardSelectionModal} onClose={() => {this.closeCardSelectionModal()}} styles={ModalCss} center>
          <CardSelection cards={cards} onCardSelect={(card: Card) => {this.handleCardSelected(card)}}/>
        </Modal>

        <Modal open={!!showModalCard} onClose={() => {this.closeCardModal()}} styles={ModalCss} center>
          {showModalCard && <BigCard card={showModalCard} />}
        </Modal>
      </>
    );
  }

  private handleCardSelected = (card: Card) => {
    this.setState({
      selectedCard: card,
      showCardSelectionModal: false
    });
  }

  private openCardSelectionModal = () => {
    this.setState({showCardSelectionModal: true});
  }

  private closeCardSelectionModal = () => {
    this.setState({showCardSelectionModal: false});
  }

  private openCardModal = (card: Card) => {
    this.setState({showModalCard: card});
  }

  private closeCardModal = () => {
    this.setState({showModalCard: null});
  }
}

export default enhance(Battle);
