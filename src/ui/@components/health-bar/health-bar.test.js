// Vendor
import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

// Components
import {HealthBar, HealthBarColor} from './health-bar';

// Mocks
import {mockContextWithoutData, mockLoggedIn} from 'doggo/test-mocks';

describe('<HealthBar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HealthBar hpLeft={30} hpTotal={120} />);
  });

  it('Renders the colored bar with the right percentage', () => {
    const healthBarColor = wrapper.find(HealthBarColor);
    expect(healthBarColor).toBeTruthy();
    expect(healthBarColor.props().healthPercentage).toBe(25);
  });
});
