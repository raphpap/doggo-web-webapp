// Vendor
import React, {Component} from 'react';

// Vendor components
import {Route, Switch} from 'react-router-dom';

// Shared components
import Container from 'doggo/ui/@components/container';
import Content from 'doggo/ui/@components/content';

// Components
import Login from './login';

// Types
interface Props {}

// Interfaces
export class Public extends Component<Props> {
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

export default Public;
