// Vendor
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
import Container from 'doggo/ui/@components/container';
import Content from 'doggo/ui/@components/content';
import Header from 'doggo/ui/@components/header';

// Components
import Battle from './battle';
import Capture from './capture';
import Team from './team';

// Context
import {
  withApplicationContext,
  WithApplicationContextProps
} from 'doggo/context';

// Types
interface Props extends RouteComponentProps<never> {}
type EnhancedProps = Props & WithApplicationContextProps;

const enhance = compose<EnhancedProps, Props>(
  withApplicationContext,
  withRouter
);

// Interfaces
export class Authenticated extends Component<EnhancedProps> {
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

    return (
      <Container>
        <Header />
        <Content>
          <Switch>
            <Route path="/capture" component={Capture} />
            <Route
              path="/team/card/:cardId"
              render={({match}) => (
                <Team cardId={match.params.cardId as string} />
              )}
            />
            <Route path="/team" component={Team} />
            <Route path="/battle" component={Battle} />
            <Route component={Capture} />
          </Switch>
        </Content>
      </Container>
    );
  }
}

export default enhance(Authenticated);
