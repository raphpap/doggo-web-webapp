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

interface State {
  isWebcamActive: boolean;
}

export class Capture extends React.Component<EnhancedProps, State> {
  public readonly state: State = {
    isWebcamActive: false
  };

  private webcam = React.createRef() as any;
  private timer?: number;

  public componentWillUnmount() {
    window.clearTimeout(this.timer);
  }

  public render() {
    const {isWebcamActive} = this.state;

    return (
      <>
        <Message>Capture</Message>
        <Webcam
          width={340}
          height={260}
          audio={false}
          onUserMedia={this.onWebcamActivated}
          ref={this.setRef}
        />
        <Button disabled={!isWebcamActive} onClick={this.onCaptureClicked}>
          Capture
        </Button>
      </>
    );
  }

  private setRef = (webcam: any) => {
    this.webcam = webcam;
  };

  private onWebcamActivated = () => {
    this.timer = window.setTimeout(() => {
      this.setState({isWebcamActive: true});
    }, 3000);
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
