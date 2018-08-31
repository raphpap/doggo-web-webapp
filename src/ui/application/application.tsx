// Vendor
import React, {Component} from 'react';

// Components
import Container from 'doggo-web-webapp/ui/@components/container';
import Content from 'doggo-web-webapp/ui/@components/content';
import Header from 'doggo-web-webapp/ui/@components/header';

// Interfaces
export class Application extends Component {
  public render() {
    return (
      <Container>
        <Header />
        <Content>
          <h2>Content</h2>
        </Content>
      </Container>
    );
  }
}

export default Application;
