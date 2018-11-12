// Vendor
import React from 'react';
import {compose} from 'recompose';

// Context
import {
  Card,
  withApplicationContext,
  WithApplicationContextProps
} from 'doggo-web-webapp/context';

// Shared Components
import BigCardModal from 'doggo-web-webapp/ui/@components/big-card-modal';
import Message from 'doggo-web-webapp/ui/@components/message';
import SmallCard from 'doggo-web-webapp/ui/@components/small-card';

// Components
import ActionContainer from './action-container';
import CardContainer from './card-container';
import CardSelectionButton from './card-selection-button';
import CardSelectionModal from './card-selection-modal';

// Utilities
import findCard from 'doggo-web-webapp/utilities/find-card';

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

    const selectedCard = findCard(selectedCardId || '', cards);

    return (
      <>
        <Message>Battle</Message>

        <CardContainer>
          <SmallCard
            card={opponent}
            onCardClick={(card: Card) => this.openCardModal(card)}
          />
        </CardContainer>

        <div>
          {selectedCard ? (
            <ActionContainer onClick={() => this.onBattleClicked(selectedCard)}>
              Battle!
            </ActionContainer>
          ) : (
            <ActionContainer>VS</ActionContainer>
          )}
        </div>

        {selectedCard ? (
          <CardContainer>
            <SmallCard
              card={selectedCard}
              onCardClick={(card: Card) => this.openCardModal(card)}
            />
          </CardContainer>
        ) : (
          <div>
            <CardSelectionButton onClick={this.openCardSelectionModal}>
              Choose your fighter
            </CardSelectionButton>
          </div>
        )}

        <CardSelectionModal
          isOpen={showCardSelectionModal}
          onClose={this.closeCardSelectionModal}
          cards={cards}
          onCardSelect={(card: Card) => {
            this.handleCardSelected(card);
          }}
        />

        <BigCardModal card={showModalCard} onClose={this.closeCardModal} />
      </>
    );
  }

  private onBattleClicked = (selectedCard: Card) => {
    const {battle: battleAction} = this.props.context.actions;
    const {battle} = this.props.context.state;
    const {opponent} = battle;

    if (selectedCard && opponent) {
      battleAction(selectedCard, opponent);
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
