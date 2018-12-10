// Vendor
import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

// Vendor components
import {Redirect} from 'react-router-dom';

// Components
import {Authenticated} from './authenticated';

// Mocks
import {mockContextWithoutData, mockLoggedIn} from 'doggo/test-mocks';

describe('<Authenticated />', () => {
  let wrapper;
  let context;
  let location = {state: {from: {pathname: '/current-path'}}};

  beforeEach(() => {
    context = mockContextWithoutData();
    wrapper = shallow(<Authenticated context={context} location={location} />);
  });

  it('redirects to the login when not logged in', () => {
    const redirect = wrapper.find(Redirect);
    expect(redirect.props().to.pathname).toBe('/login');
    expect(redirect.props().to.state.from).toBe(location);
  });

  it('renders correctly when logged in', () => {
    context = mockLoggedIn();
    wrapper.setProps({context});
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
