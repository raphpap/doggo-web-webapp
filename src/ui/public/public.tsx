// Vendor
import React, {Component} from 'react';
import {compose} from 'recompose';

// Vendor components
import {Route, Switch} from 'react-router-dom';

// Shared components
import Container from 'doggo-web-webapp/ui/@components/container';
import Content from 'doggo-web-webapp/ui/@components/content';

// Components
import Login from './login';

// Context
import {
  withApplicationContext,
  WithApplicationContextProps
} from 'doggo-web-webapp/context';

// Types
interface Props {}
type EnhancedProps = Props & WithApplicationContextProps;

const enhance = compose<EnhancedProps, Props>(withApplicationContext);

// Interfaces
export class Public extends Component<EnhancedProps> {
  public render() {
    return (
      <Container>
        <Content>
          <Switch>
            <Route path="/login" component={Login} />
            <Route component={Login} />
          </Switch>
        </Content>
      </Container>
    );
  }
}

export default enhance(Public);
