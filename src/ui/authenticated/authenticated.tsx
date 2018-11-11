// Vendor
import * as tf from '@tensorflow/tfjs';
import React, {Component} from 'react';
import {compose} from 'recompose';

// Vendor components
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  withRouter
} from 'react-router-dom';

// Shared components
import Container from 'doggo-web-webapp/ui/@components/container';
import Content from 'doggo-web-webapp/ui/@components/content';
import Header from 'doggo-web-webapp/ui/@components/header';

// Components
import Battle from './battle';
import Capture from './capture';
import Team from './team';

// Context
import {
  withApplicationContext,
  WithApplicationContextProps
} from 'doggo-web-webapp/context';

// Configurations
import {
  MOBILENET_LAYER,
  MOBILENET_URL,
  MODEL_URL
} from 'doggo-web-webapp/configurations/environment';

// State
// Interfaces
interface State {
  mobilenet: tf.Model | null;
  model: tf.Model | null;
  isMounted: boolean;
}

// Types
interface Props extends RouteComponentProps<never> {}
type EnhancedProps = Props & WithApplicationContextProps;

const enhance = compose<EnhancedProps, Props>(
  withApplicationContext,
  withRouter
);

// Interfaces
export class Authenticated extends Component<EnhancedProps> {
  public readonly state: Readonly<State> = {
    isMounted: false,
    mobilenet: null,
    model: null
  };

  public componentDidMount() {
    this.setState({isMounted: true});
    this.loadModel();
    this.loadMobilenet();
  }

  public componentDiUnmMount() {
    this.setState({isMounted: false});
  }

  public render() {
    const {context, location} = this.props;
    const {state} = context;
    const {cards} = state;
    const isAuthenticated = !!cards;

    if (!isAuthenticated) {
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: {from: location}
          }}
        />
      );
    }

    const {mobilenet, model} = this.state;

    return (
      <Container>
        <Header />
        <Content>
          <Switch>
            <Route
              path="/capture"
              render={() => <Capture mobilenet={mobilenet} model={model} />}
            />
            <Route
              path="/team/card/:cardId"
              render={({match}) => (
                <Team cardId={match.params.cardId as string} />
              )}
            />
            <Route path="/team" render={() => <Team />} />
            <Route path="/battle" component={Battle} />
            <Route component={Capture} />
          </Switch>
        </Content>
      </Container>
    );
  }

  private async loadModel() {
    const trainedModel = await tf.loadModel(MODEL_URL);
    if (this.state.isMounted) {
      this.setState({model: trainedModel});
    }
  }

  private async loadMobilenet() {
    const mobilenet = await tf.loadModel(MOBILENET_URL);
    // Return a model that outputs an internal activation.
    const layer = mobilenet.getLayer(MOBILENET_LAYER);
    const mobilenetModel = tf.model({
      inputs: mobilenet.inputs,
      outputs: layer.output
    });

    if (this.state.isMounted) {
      this.setState({mobilenet: mobilenetModel});
    }
  }
}

export default enhance(Authenticated);
