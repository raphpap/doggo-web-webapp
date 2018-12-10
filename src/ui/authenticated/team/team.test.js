// Vendor
import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

// Components
import {Team} from './team';

// Shared Components
import BigCardModal from 'doggo/ui/@components/big-card-modal';
import SmallCard from 'doggo/ui/@components/small-card';

// Mocks
import {mockCard, mockLoggedIn} from 'doggo/test-mocks';

describe('<Team />', () => {
  let wrapper;
  let context;
  const card11 = mockCard(11);
  const card12 = mockCard(12);

  beforeEach(() => {
    context = mockLoggedIn();
    context.state.cards = [card11, card12];
    wrapper = shallow(<Team context={context} />);
  });

  it('renders a message when no cards to show', () => {
    context.state.cards = [];
    wrapper.setProps({context});
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders the correct number of cards', () => {
    const smallCard = wrapper.find(SmallCard);
    expect(smallCard).toHaveLength(2);
  });

  it('shows the big card modal when a cardId is provided', () => {
    wrapper.setProps({cardId: '12'});

    const bigCardModal = wrapper.find(BigCardModal);
    expect(bigCardModal.props().card).toBe(card12);
  });

  it('doesn\'t show the big card modal when no cardId provided', () => {
    const bigCardModal = wrapper.find(BigCardModal);
    expect(bigCardModal.props().card).toBeNull();
  });
});
