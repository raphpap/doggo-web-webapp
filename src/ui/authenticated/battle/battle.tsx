// Vendor
import React from 'react';
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
import {
  ActionContainer,
  CardContainer,
  CardSelectionButton,
  Message,
  ModalCss
} from './battle.styled';
import CardSelection from './card-selection';

// Utilities
import findCard from 'doggo-web-webapp/utilities/find-card';

// Types
interface Props {}

type EnhancedProps = Props
  & WithApplicationContextProps;

interface State {
  selectedCardId: string | null,
  showCardSelectionModal: boolean;
  showModalCard: Card | null;
}

const enhance = compose<EnhancedProps, Props>(
  withApplicationContext
);

export class Battle extends React.Component<EnhancedProps, State> {
  public readonly state: State = {
    selectedCardId: null,
    showCardSelectionModal: false,
    showModalCard: null
  }

  public render() {
    const {selectedCardId, showCardSelectionModal, showModalCard} = this.state;
    const {context} = this.props;
    const {state} = context;
    const {cards, opponent} = state;

    if (!cards || !opponent) return <Message>Loading...</Message>;

    const selectedCard = findCard(selectedCardId || '', cards);

    return (
      <>
        <Message>Battle</Message>

        <CardContainer>
          <SmallCard card={opponent} onCardClick={(card: Card) => this.openCardModal(card)}/>
        </CardContainer>

        <div>
        {selectedCard ? (
          <ActionContainer onClick={() => this.onBattleClicked(selectedCard)}>Battle!</ActionContainer>
        ) : (
          <ActionContainer>VS</ActionContainer>
        )}
        </div>

        {selectedCard ? (
          <CardContainer>
            <SmallCard card={selectedCard} onCardClick={(card: Card) => this.openCardModal(card)}/>
          </CardContainer>
        ) : (
          <div>
            <CardSelectionButton onClick={this.openCardSelectionModal}>
              Choose your fighter
            </CardSelectionButton>
          </div>
        )}

        <Modal open={showCardSelectionModal} onClose={this.closeCardSelectionModal} styles={ModalCss} center>
          <CardSelection cards={cards} onCardSelect={(card: Card) => {this.handleCardSelected(card)}}/>
        </Modal>

        <Modal open={!!showModalCard} onClose={this.closeCardModal} styles={ModalCss} center>
          {showModalCard && <BigCard card={showModalCard} />}
        </Modal>
      </>
    );
  }

  private onBattleClicked = (selectedCard: Card) => {
    const {context} = this.props;
    const {actions, state} = context;
    const {opponent} = state;
    const {battle} = actions;

    if (selectedCard && opponent) {
      battle(selectedCard, opponent);
    }
  }

  private handleCardSelected = (card: Card) => {
    this.setState({
      selectedCardId: card.id,
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
