// Vendor
import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

// Components
import CardSelectionModal from './card-selection-modal';
import {Battle} from './battle';
import NextBattleAction from './next-battle-action';
import OpponentCard from './opponent-card';
import OwnCard from './own-card';

// Shared Components
import BigCardModal from 'doggo/ui/@components/big-card-modal';

// Mocks
import {mockCard, mockLoggedIn} from 'doggo/test-mocks';

describe('<Battle />', () => {
  let wrapper;
  let context;
  const card11 = mockCard(11);
  const card12 = mockCard(12);

  beforeEach(() => {
    context = mockLoggedIn();
    context.state.cards = [card11, card12];
    wrapper = shallow(<Battle context={context} />);
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders the opponent card correctly', () => {
    const opponentCard = wrapper.find(OpponentCard);
    expect(opponentCard).toBeTruthy();
    expect(opponentCard.props().opponentCard).toBe(context.state.battle.opponent);
  });

  it('renders the next battle action correctly when no selected card', () => {
    const nextBattleAction = wrapper.find(NextBattleAction);
    expect(nextBattleAction).toBeTruthy();
    expect(nextBattleAction.props().ownCard).toBe(null);
  });

  it('renders the next battle action correctly when there is a selected card', () => {
    context.state.battle.cardId = '12';
    wrapper.setProps({context})

    const nextBattleAction = wrapper.find(NextBattleAction);
    expect(nextBattleAction).toBeTruthy();
    expect(nextBattleAction.props().ownCard).toBe(card12);
  });

  it('renders the own card correctly when no selected card', () => {
    const ownCard = wrapper.find(OwnCard);
    expect(ownCard).toBeTruthy();
    expect(ownCard.props().ownCard).toBe(null);
  });

  it('renders the own card correctly when there is a selected card', () => {
    context.state.battle.cardId = '12';
    wrapper.setProps({context})

    const ownCard = wrapper.find(OwnCard);
    expect(ownCard).toBeTruthy();
    expect(ownCard.props().ownCard).toBe(card12);
  });

  it('renders the CardSelectionModal correctly when opened', () => {
    wrapper.setState({showCardSelectionModal: true})

    const cardSelectionModal = wrapper.find(CardSelectionModal);
    expect(cardSelectionModal).toBeTruthy();
    expect(cardSelectionModal.props().isOpen).toBe(true);
    expect(cardSelectionModal.props().cards).toBe(context.state.cards);
  });

  it('renders the CardSelectionModal correctly when opened', () => {
    wrapper.setState({showCardSelectionModal: false})

    const cardSelectionModal = wrapper.find(CardSelectionModal);
    expect(cardSelectionModal).toBeTruthy();
    expect(cardSelectionModal.props().isOpen).toBe(false);
    expect(cardSelectionModal.props().cards).toBe(context.state.cards);
  });

  it('renders the BigCardModal correctly when no card to show', () => {
    const bigCardModal = wrapper.find(BigCardModal);
    expect(bigCardModal).toBeTruthy();
    expect(bigCardModal.props().card).toBe(null);
  });

  it('renders the BigCardModal correctly when there is a card to show', () => {
    wrapper.setState({showModalCard: card12});
    const bigCardModal = wrapper.find(BigCardModal);
    expect(bigCardModal).toBeTruthy();
    expect(bigCardModal.props().card).toBe(card12);
  });
});
