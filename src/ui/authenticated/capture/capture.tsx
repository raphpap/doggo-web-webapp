// Vendor
import * as tf from '@tensorflow/tfjs';
import React from 'react';
import styled from 'react-emotion';
import Webcam from 'react-webcam';
import {compose} from 'recompose';

// Context
import {
  withApplicationContext,
  WithApplicationContextProps
} from 'doggo-web-webapp/context';

// components
import {Detector} from './detector';
import {Predictor} from './predictor';

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

const HiddenWebcamContainer = styled.div`
  position: fixed;
  top: -9999px;
  left: -9999px;
`;

// Constants
// const videoConstraints = {
//   facingMode: 'environment',
//   height: 720,
//   width: 1280
// };

// Types
interface Props {
  mobilenet: tf.Model | null;
  model: tf.Model | null;
}
type EnhancedProps = Props & WithApplicationContextProps;

const enhance = compose<EnhancedProps, Props>(withApplicationContext);

interface State {
  isHiddenWebcamActive: boolean;
  isTensorWebcamReady: boolean;
  tensorWebcam: any;
}

export class Capture extends React.Component<EnhancedProps, State> {
  public readonly state: State = {
    isHiddenWebcamActive: false,
    isTensorWebcamReady: false,
    tensorWebcam: null
  };

  private hiddenWebcam = React.createRef() as any;

  public render() {
    const {isHiddenWebcamActive, tensorWebcam} = this.state;
    const {mobilenet, model} = this.props;

    return (
      <>
        <Message>Capture</Message>

        <Detector onTensorWebcamReady={this.updateTensorWebcam} />
        
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

        {isHiddenWebcamActive && mobilenet && model && tensorWebcam && (
          <Predictor
            mobilenet={mobilenet}
            model={model}
            tensorWebcam={tensorWebcam}
          >
            <Button onClick={this.onCaptureClicked}>Capture</Button>
          </Predictor>
        )}
      </>
    );
  }

  private setHiddenWebcamRef = (webcam: any) => {
    this.hiddenWebcam = webcam;
  };

  private onHiddenWebcamActivated = () => {
    this.hiddenWebcam.getScreenshot();
    this.setState({isHiddenWebcamActive: true});
  };

  private updateTensorWebcam = (tensorWebcam: any) => {
    this.setState({tensorWebcam});
  };

  private onCaptureClicked = () => {
    const {context} = this.props;
    const {actions} = context;
    const {capture} = actions;

    const imageSrc = this.hiddenWebcam.getScreenshot() as string;

    capture('New Card', imageSrc);
  };
}

export default enhance(Capture);
