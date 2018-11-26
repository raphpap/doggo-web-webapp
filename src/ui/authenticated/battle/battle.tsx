// Vendor
import React from 'react';
import {compose} from 'recompose';

// Context
import {
  Card,
  withApplicationContext,
  WithApplicationContextProps
} from 'doggo/context';

// Shared Components
import BigCardModal from 'doggo/ui/@components/big-card-modal';
import Message from 'doggo/ui/@components/message';

// Components
import CardSelectionModal from './card-selection-modal';
import Container from './container';
import NextBattleAction from './next-battle-action';
import OpponentCard from './opponent-card';
import OwnCard from './own-card';

// Utilities
import findCard from 'doggo/utilities/find-card';

// Types
interface Props {}
type EnhancedProps = Props & WithApplicationContextProps;

interface State {
  showCardSelectionModal: boolean;
  showModalCard: Card | null;
}

const enhance = compose<EnhancedProps, Props>(withApplicationContext);

export class Battle extends React.Component<EnhancedProps, State> {
  public readonly state: State = {
    showCardSelectionModal: false,
    showModalCard: null
  };

  public render() {
    const {showCardSelectionModal, showModalCard} = this.state;
    const {cards, battle} = this.props.context.state;
    const {opponent, cardId: selectedCardId} = battle;

    if (!cards || !opponent) return <Message>Loading...</Message>;

    const selectedCard = findCard(selectedCardId || '', cards) || null;

    return (
      <div>
        <Container>
          <OpponentCard
            opponentCard={opponent}
            onCardClick={this.openCardModal}
          />

          <NextBattleAction
            ownCard={selectedCard}
            battleStatus={battle.status}
            onBattleClicked={this.handleBattleClicked}
            onNextAfterLost={this.handleNextAfterLost}
            onNextAfterWin={this.handleNextAfterWin}
          />

          <OwnCard
            ownCard={selectedCard}
            onCardClick={this.openCardModal}
            onCardSelectionClick={this.openCardSelectionModal}
          />
        </Container>

        <CardSelectionModal
          isOpen={showCardSelectionModal}
          onClose={this.closeCardSelectionModal}
          cards={cards}
          onCardSelect={this.handleCardSelected}
        />

        <BigCardModal card={showModalCard} onClose={this.closeCardModal} />
      </div>
    );
  }

  private handleNextAfterLost = () => {
    const {unselectBattleCard} = this.props.context.actions;
    unselectBattleCard();
  };

  private handleNextAfterWin = () => {
    const {opponent} = this.props.context.state.battle;
    const {getNextOpponent} = this.props.context.actions;

    if (opponent) {
      getNextOpponent({card: opponent});
    }
  };

  private handleBattleClicked = (selectedCard: Card) => {
    const {battle: battleAction} = this.props.context.actions;
    const {battle} = this.props.context.state;
    const {opponent} = battle;

    if (selectedCard && opponent) {
      battleAction({ownCard: selectedCard, opponentCard: opponent});
    }
  };

  private handleCardSelected = (card: Card) => {
    const {selectBattleCard} = this.props.context.actions;
    selectBattleCard(card);
    this.setState({showCardSelectionModal: false});
  };

  private openCardSelectionModal = () => {
    this.setState({showCardSelectionModal: true});
  };

  private closeCardSelectionModal = () => {
    this.setState({showCardSelectionModal: false});
  };

  private openCardModal = (card: Card) => {
    this.setState({showModalCard: card});
  };

  private closeCardModal = () => {
    this.setState({showModalCard: null});
  };
}

export default enhance(Battle);
