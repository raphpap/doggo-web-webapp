// Vendor
import React from 'react';

// Context
import {Consumer} from './context';

// Types
import {ThemeContext} from './types';

export interface WithThemeContextProps {
  context: ThemeContext;
}

export function withThemeContext<Props = {}>(
  Component: React.ComponentType<Props & WithThemeContextProps>
) {
  const ComponentWithThemeContext: React.SFC<Props> = (props: Props) => (
    <Consumer>{context => <Component {...props} context={context} />}</Consumer>
  );

  ComponentWithThemeContext.displayName = `withThemeContext(${
    Component.displayName
  })`;

  return ComponentWithThemeContext;
}
