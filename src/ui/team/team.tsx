// Vendor
import React from 'react';
import styled from 'react-emotion';
import {compose} from 'recompose';

// Context
import {
  withApplicationContext,
  WithApplicationContextProps
} from 'doggo-web-webapp/ui/@context';

// Utilities
import findCard from 'doggo-web-webapp/utilities/find-card';

// Components
import SmallCard from './small-card';

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
interface Props {
  cardId?: string;
}
type EnhancedProps = Props & WithApplicationContextProps;

const enhance = compose<EnhancedProps, Props>(withApplicationContext);

export const Team: React.SFC<EnhancedProps> = ({cardId, context}) => {
  const {state} = context;
  const {cards} = state;

  if (!cards) {
    return <Message>Loading...</Message>;
  }

  const selectedCard = cardId ? findCard(cardId, cards) : null;

  return (
    <>
      <Message>Team</Message>
      <CardsList>
        {cards.map((card, index) => (
          <SmallCard key={index} card={card} />
        ))}
      </CardsList>
    </>
  );
};

export default enhance(Team);
