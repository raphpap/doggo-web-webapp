// Vendor
import React from 'react';
import styled from 'react-emotion';

// Context
import {Card as CardType} from 'doggo/context';

// Theme
import theme from 'doggo/theme';

// Shared Components
import HealthBar from 'doggo/ui/@components/health-bar';
import {StatDonut, StatType} from 'doggo/ui/@components/stat-donut';

// Elements
const CardContainer = styled.div`
  width: 300px;
  margin: 8px;
`;

const Name = styled.div`
  padding-bottom: ${theme.padding.unit * 3}px;
  text-align: center;
  font-size: 32px;
  color: ${theme.colors.white.transparent};
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
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
  justify-content: space-between;
  height: 120px;
`;

// Types
interface Props {
  card: CardType;
}

export const BigCard: React.SFC<Props> = ({card}) => {
  const {attack, defense, hpLeft, hpTotal, name, image} = card;

  return (
    <CardContainer>
      <Name>{name}</Name>

      <Image src={image} />

      <Info>
        <HealthBar hpLeft={hpLeft} hpTotal={hpTotal} />

        <Stats>
          <StatDonut percentage={attack} statType={StatType.Attack} />

          <StatDonut percentage={defense} statType={StatType.Defense} />
        </Stats>
      </Info>
    </CardContainer>
  );
};

export default BigCard;
