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
import SmallCard from 'doggo-web-webapp/ui/@components/small-card';

// Components
import {
  ActionContainer,
  CardContainer,
  CardSelectionButton,
  Message,
  ModalCss
} from './battle.styled';
import CardSelectionModal from './card-selection-modal';

// Utilities
import findCard from 'doggo-web-webapp/utilities/find-card';

// Types
interface Props {}

type EnhancedProps = Props & WithApplicationContextProps;

interface State {
  selectedCardId: string | null;
  showCardSelectionModal: boolean;
  showModalCard: Card | null;
}

const enhance = compose<EnhancedProps, Props>(withApplicationContext);

export class Battle extends React.Component<EnhancedProps, State> {
  public readonly state: State = {
    selectedCardId: null,
    showCardSelectionModal: false,
    showModalCard: null
  };

  public render() {
    const {selectedCardId, showCardSelectionModal, showModalCard} = this.state;
    const {cards, battle} = this.props.context.state;
    const {opponent} = battle;

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
    this.setState({
      selectedCardId: card.id,
      showCardSelectionModal: false
    });
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
