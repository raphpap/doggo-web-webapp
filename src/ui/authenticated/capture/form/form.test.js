// Vendor
import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

// Shared Components
import {ErrorMessage} from 'doggo/ui/@components/error-message';

// Components
import {Form} from './form';
import TextField from './text-field';

// Mocks
import {mockContextWithoutData, mockLoggedIn} from 'doggo/test-mocks';

describe('<Form />', () => {
  let wrapper;
  let context;
  let imageSrc = "image_src";
  let onClose = jest.fn();
  let onSubmit = jest.fn();

  let props = {
    imageSrc,
    onClose,
    onSubmit
  };

  beforeEach(() => {
    wrapper = shallow(<Form {...props} />);
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('shows the errors when the submit fails', () => {
    wrapper.setState({hasError: true});

    const errorMessage = wrapper.find(ErrorMessage);
    const textField = wrapper.find(TextField);

    expect(textField.props().error).toBe(true);
    expect(errorMessage).toHaveLength(1);
  });

  it('does not call onSubmit when submitting the form and the card name is not valid', () => {
    const fakeEvent = { preventDefault: jest.fn() };
    wrapper.setState({cardName: '   '});
    const form = wrapper.find('form');
    form.simulate('submit', fakeEvent);

    expect(fakeEvent.preventDefault).toBeCalled();
    expect(props.onSubmit).not.toBeCalled();
  });

  it('calls onSubmit when submitting the form and the card name is valid', () => {
    const fakeEvent = { preventDefault: jest.fn() };
    wrapper.setState({cardName: 'card_name'});
    const form = wrapper.find('form');
    form.simulate('submit', fakeEvent);

    expect(fakeEvent.preventDefault).toBeCalled();
    expect(props.onSubmit).toBeCalled();
  });
});
