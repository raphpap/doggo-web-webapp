// Vendor
import React, {Component} from 'react';
import {compose} from 'recompose';

// Vendor components
import {Route, Switch} from 'react-router-dom';

// Shared components
import Container from 'doggo-web-webapp/ui/@components/container';
import Content from 'doggo-web-webapp/ui/@components/content';
import Header from 'doggo-web-webapp/ui/@components/header';

// Components
import Battle from 'doggo-web-webapp/ui/battle';
import Capture from 'doggo-web-webapp/ui/capture';
import Team from 'doggo-web-webapp/ui/team';

// Context
import {
  withApplicationContext,
  WithApplicationContextProps
} from 'doggo-web-webapp/ui/@context';

// Types
interface Props {}
type EnhancedProps = Props & WithApplicationContextProps;

const enhance = compose<EnhancedProps, Props>(withApplicationContext);

// Interfaces
export class Application extends Component<EnhancedProps> {
  public componentDidMount() {
    this.props.context.actions.login('username', 'password');
  }

  public render() {
    return (
      <Container>
        <Header />
        <Content>
          <Switch>
            <Route path="/capture" component={Capture} />
            <Route path="/team/card/:cardId" render={({match}) => <Team cardId={match.params.cardId} />} />
            <Route path="/team" render={() => <Team />} />
            <Route path="/battle" component={Battle} />
            <Route component={Capture} />
          </Switch>
        </Content>
      </Container>
    );
  }
}

export default enhance(Application);
