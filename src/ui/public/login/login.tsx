// Vendor
import React, {ChangeEventHandler, FormEventHandler} from 'react';
import {compose} from 'recompose';

// Vendor components
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

// Assets
import logo from 'doggo/assets/images/doggo-logo.png';

// Shared components
import ErrorMessage from 'doggo/ui/@components/error-message';
import Logo from 'doggo/ui/@components/logo';

// Components
import Button from './button';
import Form from './form';
import TextField from './text-field';

// Context
import {
  withApplicationContext,
  WithApplicationContextProps
} from 'doggo/context';

// Types
interface State {
  username: string;
  password: string;
  isDirty: boolean;
}

interface Props extends RouteComponentProps<never> {}
type EnhancedProps = Props & WithApplicationContextProps;

const enhance = compose<EnhancedProps, Props>(
  withApplicationContext,
  withRouter
);

export class Login extends React.Component<EnhancedProps, State> {
  public readonly state: Readonly<State> = {
    isDirty: false,
    password: '',
    username: ''
  };

  public render() {
    const {cards, error} = this.props.context.state;
    const isAuthenticated = !!cards;
    const {from} = this.props.location.state || {from: {pathname: '/capture'}};

    if (isAuthenticated) return <Redirect to={from} />;

    const hasError = Boolean(error);
    const {isDirty, username, password} = this.state;

    return (
      <>
        <Logo logo={logo} marginUnits={5} height={'180px'} />

        <Form onSubmit={this.handleSubmit}>
          <TextField
            id="username"
            error={!isDirty && hasError}
            placeholder="Username"
            type="text"
            value={username}
            onChange={this.handleUsername}
          />

          <TextField
            id="password"
            error={!isDirty && hasError}
            placeholder={'Password'}
            type="password"
            value={password}
            onChange={this.handlePassword}
          />

          {!isDirty && hasError && (
            <ErrorMessage message="Wrong username and/or password" />
          )}

          <Button type="submit">Login</Button>
        </Form>
      </>
    );
  }

  private handleUsername: ChangeEventHandler<HTMLInputElement> = event => {
    this.setState({
      isDirty: true,
      username: event.target.value
    });
  };

  private handlePassword: ChangeEventHandler<HTMLInputElement> = event => {
    this.setState({
      isDirty: true,
      password: event.target.value
    });
  };

  private handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();

    const {login} = this.props.context.actions;
    const {username, password} = this.state;

    login(username, password);
    this.setState({isDirty: false});
  };
}

export default enhance(Login);
