// Vendor
import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

// Assets
import logo from 'doggo/assets/images/capture-logo.png';

// Components
import {Capture} from './capture';
import Form from './form';

// Shared Components
import Modal from 'doggo/ui/@components/modal';
import PrettyButton from 'doggo/ui/@components/pretty-button';

// Mocks
import {mockCard} from 'doggo/test-mocks';

// Mocks
import {mockLoggedIn} from 'doggo/test-mocks';

describe('<Capture />', () => {
  let wrapper;
  let context;

  beforeEach(() => {
    context = mockLoggedIn();
    wrapper = shallow(<Capture context={context} />);
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('does not shows the form modal before a capture', () => {
    const modal = wrapper.find(Modal);
    expect(modal.props().isOpen).toBe(false);

    const form = wrapper.find(Form);
    expect(form).toHaveLength(0);
  });

  it('shows the form modal after a capture', () => {
    wrapper.setState({capturedImageSrc: 'image_mocked'});

    const modal = wrapper.find(Modal);
    expect(modal.props().isOpen).toBe(true);

    const form = wrapper.find(Form);
    expect(form).toHaveLength(1);
  });

  it('does not render the capture button before the webcam is ready', () => {
    wrapper.setState({
      isHiddenWebcamActive: true,
      isWebcamActive: false
    });

    const prettyButton = wrapper.find(PrettyButton);
    expect(prettyButton).toHaveLength(0);
  });

  it('does not render the capture button before the hidden webcam is ready', () => {
    wrapper.setState({
      isHiddenWebcamActive: false,
      isWebcamActive: true
    });

    const prettyButton = wrapper.find(PrettyButton);
    expect(prettyButton).toHaveLength(0);
  });

  it('renders the capture button when both webcams are ready', () => {
    wrapper.setState({
      isHiddenWebcamActive: true,
      isWebcamActive: true
    });

    const prettyButton = wrapper.find(PrettyButton);
    expect(prettyButton).toHaveLength(1);
    expect(prettyButton.props().logo).toBe(logo);
  });
});
