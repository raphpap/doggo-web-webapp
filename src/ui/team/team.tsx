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
      {cards.map(({name, hp, image}, index) => (
        <div key={index}>
          <Message>
            {name} / {hp}
            hp
          </Message>

          <img src={image} height={40} width={40} />
        </div>
      ))}
    </>
  );
};

export default enhance(Team);
