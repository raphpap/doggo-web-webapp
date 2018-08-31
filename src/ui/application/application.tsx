// Vendor
import React, {Component} from 'react';

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

// Interfaces
export class Application extends Component {
  public render() {
    return (
      <Container>
        <Header />
        <Content>
          <Switch>
            <Route path="/capture" component={Capture} />
            <Route path="/team" component={Team} />
            <Route path="/battle" component={Battle} />
            <Route component={Capture} />
          </Switch>
        </Content>
      </Container>
    );
  }
}

export default Application;
