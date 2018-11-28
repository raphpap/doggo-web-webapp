// Vendor
import React from 'react';
import styled from 'react-emotion';

// Context
import {Card as CardType} from 'doggo/context';

// Theme
import theme from 'doggo/theme';

// Shared Elements
import HealthBar from 'doggo/ui/@components/health-bar';

// Elements
interface CardProps {
  isDefeated: boolean;
  isClickable: boolean;
}

const CardContainer = styled.li`
  display: flex;
  opacity: ${({isDefeated}: CardProps) => (isDefeated ? 0.5 : 1)};
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  margin-bottom: 16px;
  cursor: ${({isClickable}: CardProps) =>
    isClickable ? 'pointer' : 'not-allowed'};
`;

const Image = styled.img`
  display: block;
  width: auto;
  height: 100%;
  border-radius: 8px;
`;

const Name = styled.div`
  padding-bottom: ${theme.padding.unit}px;
  font-size: 18px;
`;

const Info = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: space-around;
  padding: ${theme.padding.unit}px ${theme.padding.unit * 3}px;
  color: ${theme.colors.white.transparent};
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: ${theme.padding.unit / 2}px;
  font-size: 14px;
`;

// Types
interface Props {
  card: CardType;
  isNotClickable?: boolean;
  onCardClick: (card: CardType) => void;
}

export class SmallCard extends React.Component<Props> {
  public render() {
    const {card, isNotClickable} = this.props;
    const {attack, defense, hpLeft, hpTotal, name, image} = card;

    const cardContainerProps = {
      isClickable: !isNotClickable,
      isDefeated: hpLeft === 0
    };

    return (
      <CardContainer {...cardContainerProps} onClick={this.handleOnCardClicked}>
        <Image src={image} />

        <Info>
          <Name>{name}</Name>

          <HealthBar hpLeft={hpLeft} hpTotal={hpTotal} />

          <Stats>
            <div>Atk: {attack}</div>
            <div>Def: {defense}</div>
          </Stats>
        </Info>
      </CardContainer>
    );
  }

  private handleOnCardClicked = () => {
    const {card, isNotClickable, onCardClick} = this.props;

    if (!isNotClickable) {
      onCardClick(card);
    }
  };
}

export default SmallCard;
