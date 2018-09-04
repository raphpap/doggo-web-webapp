// Vendor
import React from 'react';
import styled from 'react-emotion';
import Webcam from 'react-webcam';
import {compose} from 'recompose';

// Context
import {
  withApplicationContext,
  WithApplicationContextProps
} from 'doggo-web-webapp/ui/@context';

// Elements
const Message = styled.p`
  color: rgba(255, 255, 255, 0.8);
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: #fff;
  color: #000;
`;

// Types
interface Props {}
type EnhancedProps = Props & WithApplicationContextProps;

const enhance = compose<EnhancedProps, Props>(withApplicationContext);

export class Capture extends React.Component<EnhancedProps> {
  private webcam = React.createRef() as any;

  public render() {
    return (
      <>
        <Message>Capture</Message>
        <Webcam audio={false} ref={this.setRef} />
        <Button onClick={this.onCaptureClicked}>Capture</Button>
      </>
    );
  }

  private setRef = (webcam: any) => {
    this.webcam = webcam;
  };

  private onCaptureClicked = () => {
    const {context} = this.props;
    const {actions} = context;
    const {capture} = actions;

    const imageSrc = this.webcam.getScreenshot() as string;

    capture({
      image: imageSrc,
      name: 'New Card'
    });
  };
}

export default enhance(Capture);
