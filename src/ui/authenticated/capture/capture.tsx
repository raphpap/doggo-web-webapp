// Vendor
import React from 'react';
import Webcam from 'react-webcam';
import {compose} from 'recompose';

// Assets
import logo from 'doggo/assets/images/capture-logo.png';

// Context
import {
  withApplicationContext,
  WithApplicationContextProps
} from 'doggo/context';

// Shared Components
import Message from 'doggo/ui/@components/message';
import Modal from 'doggo/ui/@components/modal';
import PrettyButton from 'doggo/ui/@components/pretty-button';

// Components
import CaptureButtonContainer from './capture-button-container';
import Form from './form';
import HiddenWebcamContainer from './hidden-webcam-container';
import WebcamContainer from './webcam-container';

// Constants
// const videoConstraints = {
//   facingMode: 'environment',
//   height: 720,
//   width: 1280
// };

// Types
interface Props {}
type EnhancedProps = Props & WithApplicationContextProps;

const enhance = compose<EnhancedProps, Props>(withApplicationContext);

interface State {
  capturedImageSrc: string | null;
  isWebcamActive: boolean;
  isHiddenWebcamActive: boolean;
}

export class Capture extends React.Component<EnhancedProps, State> {
  public readonly state: State = {
    capturedImageSrc: null,
    isHiddenWebcamActive: false,
    isWebcamActive: false
  };

  private hiddenWebcam = React.createRef() as any;

  private webcamTimer?: number;
  private hiddenWebcamTimer?: number;

  public componentWillUnmount() {
    window.clearTimeout(this.webcamTimer);
    window.clearTimeout(this.hiddenWebcamTimer);
  }

  public render() {
    const {capturedImageSrc, isHiddenWebcamActive, isWebcamActive} = this.state;
    const disableCapture = !isHiddenWebcamActive || !isWebcamActive;

    return (
      <>
        <Message>
          Find a Doggo and press Capture to make him part of your team!
        </Message>

        <div>
          <WebcamContainer>
            <Webcam
              /* width={340} */
              /* height={260} */
              width={680}
              height={520}
              audio={false}
              /* videoConstraints={videoConstraints} */
              onUserMedia={this.onWebcamActivated}
            />

            {!disableCapture && !capturedImageSrc && (
              <CaptureButtonContainer>
                <PrettyButton logo={logo} onClick={this.onCaptureClicked}>
                  Capture
                </PrettyButton>
              </CaptureButtonContainer>
            )}
          </WebcamContainer>

          <HiddenWebcamContainer>
            <Webcam
              width={680}
              height={520}
              audio={false}
              /* videoConstraints={videoConstraints} */
              onUserMedia={this.onHiddenWebcamActivated}
              ref={this.setHiddenWebcamRef}
            />
          </HiddenWebcamContainer>
        </div>

        <Modal isOpen={!!capturedImageSrc} onClose={this.closeModal}>
          {capturedImageSrc && (
            <Form
              imageSrc={capturedImageSrc}
              onClose={this.closeModal}
              onSubmit={this.handleSubmit}
            />
          )}
        </Modal>
      </>
    );
  }

  private setHiddenWebcamRef = (webcam: any) => {
    this.hiddenWebcam = webcam;
  };

  private onWebcamActivated = () => {
    this.webcamTimer = window.setTimeout(() => {
      this.setState({isWebcamActive: true});
    }, 3000);
  };

  private onHiddenWebcamActivated = () => {
    this.hiddenWebcam.getScreenshot();

    this.hiddenWebcamTimer = window.setTimeout(() => {
      this.setState({isHiddenWebcamActive: true});
    }, 3000);
  };

  private onCaptureClicked = () => {
    const imageSrc = this.hiddenWebcam.getScreenshot() as string;
    this.setState({capturedImageSrc: imageSrc});
  };

  private closeModal = () => {
    this.setState({capturedImageSrc: null});
  };

  private handleSubmit = (cardName: string, imageSrc: string) => {
    const {capture} = this.props.context.actions;
    capture(cardName, imageSrc);
    this.closeModal();
  };
}

export default enhance(Capture);
