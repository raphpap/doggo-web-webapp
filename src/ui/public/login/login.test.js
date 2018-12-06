// Vendor
import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

// Vendor components
import {Redirect} from 'react-router-dom';

// Shared Components
import {ErrorMessage} from 'doggo/ui/@components/error-message';

// Components
import {Login} from './login';
import TextField from './text-field';

// Mocks
import {mockContextWithoutData, mockLoggedIn} from 'doggo/test-mocks';

describe('<Login />', () => {
  let wrapper;
  let context;
  let location = {state: null};

  beforeEach(() => {
    context = mockContextWithoutData();
    wrapper = shallow(<Login context={context} location={location} />);
  });

  it('renders correctly when not logged in', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('redirects to /capture after logged in when no previous path', () => {
    context = mockLoggedIn();
    wrapper.setProps({context});
    const redirect = wrapper.find(Redirect);
    expect(redirect.props().to.pathname).toBe('/capture');
  });

  it('redirects to the right path after logged in with previous path', () => {
    context = mockLoggedIn();
    location = {state: {from: {pathname: '/previous-path'}}};
    wrapper.setProps({context, location});
    const redirect = wrapper.find(Redirect);
    expect(redirect.props().to.pathname).toBe('/previous-path');
  });

  it('shows the errors when login fail', () => {
    context.state.error = {status: 401};
    wrapper.setProps({context: context});

    const errorMessage = wrapper.find(ErrorMessage);
    const textFields = wrapper.find(TextField);

    expect(textFields.at(0).props().error).toBe(true);
    expect(textFields.at(1).props().error).toBe(true);
    expect(errorMessage).toHaveLength(1);
  });
});
