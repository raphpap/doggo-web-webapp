// Vendor
import * as tf from '@tensorflow/tfjs';
import {Component} from 'react';

enum PredictedClasses {
  Doggo = 0,
  NotDoggo = 1
}

interface Props {
  mobilenet: tf.Model;
  model: tf.Model;
  tensorWebcam: any;
}

interface State {
  isDoggo: boolean;
}

export class Predictor extends Component<Props, State> {
  public readonly state: Readonly<State> = {
    isDoggo: false
  };

  private timer?: number;

  public componentDidMount() {
    tf.tidy(() =>
      this.props.mobilenet.predict(this.props.tensorWebcam.capture())
    );
    this.predict();
  }

  public componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  public render() {
    return this.state.isDoggo ? this.props.children : null;
  }

  public predict = () => {
    this.timer = window.setInterval(() => {
      this.doPrediction();
    }, 500);
  };

  private async doPrediction() {
    const {mobilenet, model, tensorWebcam} = this.props;

    const predictedClass = tf.tidy(() => {
      // Capture the frame from the webcam.
      const image = tensorWebcam.capture();

      // Make a prediction through mobilenet, getting the internal activation of
      // the mobilenet model.
      const activation = mobilenet.predict(image);

      // Make a prediction through our newly-trained model using the activation
      // from mobilenet as input.
      const predictions: any = model.predict(activation);

      // Returns the index with the maximum probability. This number corresponds
      // to the class the model thinks is the most probable given the input.
      return predictions.as1D().argMax();
    });

    const classId = (await predictedClass.data())[0];
    this.setState({isDoggo: classId === PredictedClasses.Doggo});

    predictedClass.dispose();

    await tf.nextFrame();
  }
}

export default Predictor;
