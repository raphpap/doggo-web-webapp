// Vendor
import React from 'react';

// Context
import {Consumer} from './context';

// Types
import {ApplicationContext} from './types';

export interface WithApplicationContextProps {
  context: ApplicationContext;
}

export function withApplicationContext<Props = {}>(
  Component: React.ComponentType<Props & WithApplicationContextProps>
) {
  const ComponentWithApplicationContext: React.SFC<Props> = (props: Props) => (
    <Consumer>{context => <Component {...props} context={context} />}</Consumer>
  );

  ComponentWithApplicationContext.displayName = `withApplicationContext(${
    Component.displayName
  })`;

  return ComponentWithApplicationContext;
}
