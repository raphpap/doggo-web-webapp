// Vendor
import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

// Components
import CardSelectionButton from './card-selection-button';
import {OwnCard} from './own-card';

// Shared Components
import SmallCard from 'doggo/ui/@components/small-card';

// Mocks
import {mockCard} from 'doggo/test-mocks';

describe('<NextBattleAction />', () => {
  let wrapper;
  let onCardClick;
  let onCardSelectionClick;
  let ownCard;

  let props;

  beforeEach(() => {
    onCardClick = jest.fn();
    onCardSelectionClick = jest.fn();
    ownCard = null;

    props = {
      onCardClick,
      onCardSelectionClick,
      ownCard
    };

    wrapper = shallow(<OwnCard {...props} />);
  });


  it('renders CardSelectionButton when no card is present', () => {
    const smallCard = wrapper.find(SmallCard);
    expect(smallCard).toHaveLength(0);

    const cardSelectionButton = wrapper.find(CardSelectionButton);
    expect(cardSelectionButton).toHaveLength(1);
  });

  it('renders a small card when a card is present', () => {
    const card1 = mockCard(1);
    props.ownCard = card1;
    wrapper.setProps({...props});

    const smallCard = wrapper.find(SmallCard);
    expect(smallCard).toHaveLength(1);
    expect(smallCard.props().card).toBe(card1);

    const cardSelectionButton = wrapper.find(CardSelectionButton);
    expect(cardSelectionButton).toHaveLength(0);
  });
});
