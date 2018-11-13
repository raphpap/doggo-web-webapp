// Vendor
import React from 'react';

// Assets
import logo from 'doggo/assets/images/battle-logo.png';

// SharedComponents
import Message from 'doggo/ui/@components/message';
import PrettyButton from 'doggo/ui/@components/pretty-button';

// Components
import ActionContainer from './action-container';

// Context
import {BattleStatus, Card} from 'doggo/context';

// Types
interface Props {
  battleStatus: BattleStatus;
  onBattleClicked: (card: Card) => void;
  onNextAfterLost: () => void;
  ownCard: Card | null;
}

export class NextBattleAction extends React.Component<Props> {
  public render() {
    const {
      battleStatus,
      onBattleClicked,
      onNextAfterLost,
      ownCard
    } = this.props;

    return (
      <ActionContainer>
        {battleStatus === BattleStatus.NoOpponent && (
          <Message>Loading...</Message>
        )}

        {battleStatus === BattleStatus.NoCardSelected && (
          <Message>Pick your fighter</Message>
        )}

        {battleStatus === BattleStatus.Ready && (
          <PrettyButton logo={logo} onClick={() => onBattleClicked(ownCard!)} />
        )}

        {battleStatus === BattleStatus.Ongoing && <Message>Loading...</Message>}

        {battleStatus === BattleStatus.Won && <Message>You won!</Message>}

        {battleStatus === BattleStatus.Lost && (
          <div>
            <Message>You lost...</Message>
            <button onClick={onNextAfterLost}>Next</button>
          </div>
        )}
      </ActionContainer>
    );
  }
}

export default NextBattleAction;
