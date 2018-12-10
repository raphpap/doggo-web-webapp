// Vendor
import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

// Context
import {BattleStatus} from 'doggo/context';

// Components
import {NextBattleAction} from './next-battle-action';

// Mocks
import {mockCard} from 'doggo/test-mocks';

describe('<NextBattleAction />', () => {
  let wrapper;
  let battleStatus;
  let onBattleClicked;
  let onNextAfterLost;
  let onNextAfterWin;
  let ownCard;

  let props;

  beforeEach(() => {
    battleStatus = BattleStatus.NoOpponent;
    onBattleClicked = jest.fn();
    onNextAfterLost = jest.fn();
    onNextAfterWin = jest.fn();
    ownCard = null;

    props = {
      battleStatus,
      onBattleClicked,
      onNextAfterLost,
      onNextAfterWin,
      ownCard
    };

    wrapper = shallow(<NextBattleAction {...props} />);
  });

  it('renders correctly when no opponent', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly when no card selected', () => {
    battleStatus = BattleStatus.NoCardSelected;
    wrapper.setProps({battleStatus});
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly when ready to battle', () => {
    battleStatus = BattleStatus.Ready;
    wrapper.setProps({battleStatus});
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly when ongoing battle', () => {
    battleStatus = BattleStatus.Ongoing;
    wrapper.setProps({battleStatus});
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly when won battle', () => {
    battleStatus = BattleStatus.Won;
    wrapper.setProps({battleStatus});
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly when lost battle', () => {
    battleStatus = BattleStatus.Lost;
    wrapper.setProps({battleStatus});
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
