// Vendor
import React from 'react';
import styled from 'react-emotion';
import {compose} from 'recompose';

// Context
import {
  withApplicationContext,
  WithApplicationContextProps
} from 'doggo-web-webapp/ui/@context';

// Components
import Card from './card';

// Elements
const CardsList = styled.ul`
  min-width: 320px;
  max-width: 800px;
  padding: 0;
`;

const Message = styled.p`
  color: rgba(255, 255, 255, 0.8);
`;

// Types
interface Props {}
type EnhancedProps = Props & WithApplicationContextProps;

const enhance = compose<EnhancedProps, Props>(withApplicationContext);

export const Team: React.SFC<EnhancedProps> = ({context}) => {
  const {state} = context;
  const {cards} = state;

  if (!cards) {
    return <Message>Loading...</Message>;
  }

  return (
    <>
      <Message>Team</Message>
      <CardsList>
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </CardsList>
    </>
  );
};

export default enhance(Team);
