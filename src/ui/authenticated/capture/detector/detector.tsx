// Vendor
import React, {Component} from 'react';
import styled from 'react-emotion';

// Services
import {TensorWebcam} from 'doggo-web-webapp/tensorflow/tensor-webcam';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Video = styled.video`
  padding: 8px;
  margin: 32px;
`;

interface Props {
  onTensorWebcamReady: (tensorWebcam: any) => void;
}

export class Detector extends Component<Props> {
  private tensorWebcam: any;

  public async componentDidMount() {
    this.tensorWebcam = new TensorWebcam(
      document.getElementById('tensor-webcam')
    );
    await this.tensorWebcam.setup();
    this.props.onTensorWebcamReady(this.tensorWebcam);
  }

  public render() {
    return (
      <Container>
        <Video
          autoPlay
          playsInline
          muted
          id="tensor-webcam"
          width="224"
          height="224"
        />
      </Container>
    );
  }
}

export default Detector;
