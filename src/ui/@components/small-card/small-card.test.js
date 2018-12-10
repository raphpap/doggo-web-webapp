// Vendor
import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

// Components
import {CardContainer, SmallCard} from './small-card';

// Mocks
import {mockCard} from 'doggo/test-mocks';

describe('<SmallCard />', () => {
  let wrapper;
  let props;
  let card;

  beforeEach(() => {
    card = {
      attack: 10,
      defense: 20,
      hpLeft: 30,
      hpTotal: 40,
      id: '123',
      image: 'image.jpg',
      name: 'card_name'
    };

    props = {
      card,
      isNotClickable: false,
      onCardClick: jest.fn()
    };

    wrapper = shallow(<SmallCard {...props} />);
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders CardContainer with the right props when clickable', () => {
    const cardContainer = wrapper.find(CardContainer);
    expect(cardContainer.props().isClickable).toBe(true);
  });

  it('renders CardContainer with the right props when not clickable', () => {
    props = {
      ...props,
      isNotClickable: true,
    };
    wrapper.setProps(props);

    const cardContainer = wrapper.find(CardContainer);
    expect(cardContainer.props().isClickable).toBe(false);
  });


  it('renders CardContainer with the right props when some hp is left', () => {
    const cardContainer = wrapper.find(CardContainer);
    expect(cardContainer.props().isDefeated).toBe(false);
  });

  it('renders CardContainer with the right props when no hp is left', () => {
    props = {
      ...props,
      card: {
        ...props.card,
        hpLeft: 0
      },
    };
    wrapper.setProps(props);

    const cardContainer = wrapper.find(CardContainer);
    expect(cardContainer.props().isDefeated).toBe(true);
  });

  it('calls onCardClick when CardContainer is clicked while being clickable', () => {
    const cardContainer = wrapper.find(CardContainer);
    cardContainer.simulate('click');

    expect(props.onCardClick).toHaveBeenCalledWith(props.card);
  });

  it('does not calls onCardClick when CardContainer is clicked while not being clickable', () => {
    props = {
      ...props,
      isNotClickable: true
    };
    wrapper.setProps(props);

    const cardContainer = wrapper.find(CardContainer);
    cardContainer.simulate('click');

    expect(props.onCardClick).toHaveBeenCalledTimes(0);
  });
});
