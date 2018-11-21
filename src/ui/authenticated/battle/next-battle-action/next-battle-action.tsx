// Vendor
import React from 'react';

// Assets
import battleLogo from 'doggo/assets/images/battle-logo.png';
import lostLogo from 'doggo/assets/images/lost-logo.png';
import wonLogo from 'doggo/assets/images/won-logo.png';

// SharedComponents
import Logo from 'doggo/ui/@components/logo';
import Message from 'doggo/ui/@components/message';
import PrettyButton from 'doggo/ui/@components/pretty-button';

// Components
import ActionContainer from './action-container';
import BattleAnimation from './battle-animation';
import ContinueButton from './continue-button';

// Context
import {BattleStatus, Card} from 'doggo/context';

// Types
interface Props {
  battleStatus: BattleStatus;
  onBattleClicked: (card: Card) => void;
  onNextAfterLost: () => void;
  onNextAfterWin: () => void;
  ownCard: Card | null;
}

export class NextBattleAction extends React.Component<Props> {
  public render() {
    const {
      battleStatus,
      onBattleClicked,
      onNextAfterLost,
      onNextAfterWin,
      ownCard
    } = this.props;

    return (
      <ActionContainer>
        {battleStatus === BattleStatus.NoOpponent && (
          <Message>Loading...</Message>
        )}

        {battleStatus === BattleStatus.NoCardSelected && (
          <Message>Get ready to battle</Message>
        )}

        {battleStatus === BattleStatus.Ready && (
          <PrettyButton
            logo={battleLogo}
            onClick={() => onBattleClicked(ownCard!)}
          />
        )}

        {battleStatus === BattleStatus.Ongoing && <BattleAnimation />}

        {battleStatus === BattleStatus.Won && (
          <div>
            <Logo logo={wonLogo} height={'110px'} marginUnits={0.1} />
            <ContinueButton onClick={onNextAfterWin}>
              {'Press to continue >>'}
            </ContinueButton>
          </div>
        )}

        {battleStatus === BattleStatus.Lost && (
          <div>
            <Logo logo={lostLogo} height={'110px'} marginUnits={0.1} />
            <ContinueButton onClick={onNextAfterLost}>
              {'Press to continue >>'}
            </ContinueButton>
          </div>
        )}
      </ActionContainer>
    );
  }
}

export default NextBattleAction;
