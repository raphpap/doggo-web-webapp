// Vendor
import React from 'react';
import styled from 'react-emotion';
import {compose} from 'recompose';

// Context
import {
  withApplicationContext,
  WithApplicationContextProps
} from 'doggo-web-webapp/ui/@context';

// Elements
const Message = styled.p`
  color: rgba(255, 255, 255, 0.8);
`;

const Button = styled.button`
  background-color: #fff;
  color: #000;
  width: 100px;
  height: 40px;
`;

// Types
interface Props {}
type EnhancedProps = Props & WithApplicationContextProps;

const enhance = compose<EnhancedProps, Props>(withApplicationContext);

export const Capture: React.SFC<EnhancedProps> = ({context}) => {
  const {actions} = context;
  const {capture} = actions;

  return (
    <>
      <Message>Capture</Message>
      <Button onClick={() => capture('New card')}>Capture</Button>
    </>
  );
};

export default enhance(Capture);
