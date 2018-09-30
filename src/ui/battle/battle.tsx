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
} from 'doggo-web-webapp/ui/@context';

// Shared Components
import BigCard from 'doggo-web-webapp/ui/@components/big-card';
import SmallCard from 'doggo-web-webapp/ui/@components/small-card';

// Elements
const ActionContainer = styled.button`
  width: 160px;
  height: 160px;
  border: 2px solid #fff;
  border-radius: 50%;
  background-color: transparent;
  font-size: 16px;
  color: #fff;
  margin: 40px 0;
`;

const CardContainer = styled.ul`
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
interface Props {}

type EnhancedProps = Props
  & WithApplicationContextProps;

interface State {
  showModalCard: Card | null;
}

const enhance = compose<EnhancedProps, Props>(
  withApplicationContext
);

export class Battle extends React.Component<EnhancedProps, State> {
  public readonly state: State = {
    showModalCard: null
  }

  public render() {
    const {showModalCard} = this.state;
    const {context} = this.props;
    const {state} = context;
    const {nextOpponent} = state;

    if (!nextOpponent) return <Message>Loading...</Message>;

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

        <Modal open={!!showModalCard} onClose={() => {this.closeCardModal()}} styles={ModalCss} center>
          {showModalCard && <BigCard card={showModalCard} />}
        </Modal>
      </>
    );
  }

  private openCardModal = (card: Card) => {
    this.setState({showModalCard: card});
  }

  private closeCardModal = () => {
    this.setState({showModalCard: null});
  }
}

export default enhance(Battle);
