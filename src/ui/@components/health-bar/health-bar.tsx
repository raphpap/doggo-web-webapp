// Vendor
import React, {Component} from 'react';
import styled from 'react-emotion';

// Theme
import theme from 'doggo/theme';

interface HealthBarColorProps {
  healthPercentage: number;
}

const getHealthBarWidth = (healthPercentage: number) => {
  return `${healthPercentage}%`;
};

const getHealthBarColor = (healthPercentage: number) => {
  if (healthPercentage > 50) return '#05a8aa';
  if (healthPercentage > 25) return '#ff9605';
  return '#ec4e20';
};

// Elements
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 84px;
`;

const HealthBox = styled.div`
  position: relative;
  width: 100%;
  height: 14px;
  border: solid 2px #eee;
  border-radius: 6px;
  background-color: #ccc;
`;

export const HealthBarColor = styled.div`
  position: absolute;
  width: ${({healthPercentage}: HealthBarColorProps) =>
    getHealthBarWidth(healthPercentage)};
  height: 10px;
  border-radius: 4px;
  background-color: ${({healthPercentage}: HealthBarColorProps) =>
    getHealthBarColor(healthPercentage)};
`;

const Health = styled.div`
  position: absolute;
  right: 5px;
  padding: 0 2px 1px;
  border-radius: 0 0 6px 6px;
  background-color: #eee;
  font-size: 12px;
  font-weight: 700;
  color: ${theme.colors.grey.grey70};
`;

// Types
interface Props {
  hpLeft: number;
  hpTotal: number;
}

export class HealthBar extends Component<Props> {
  public render() {
    const {hpLeft, hpTotal} = this.props;
    const healthPercentage = Math.ceil((hpLeft / hpTotal) * 100);

    return (
      <Container>
        <HealthBox>
          <HealthBarColor healthPercentage={healthPercentage} />
        </HealthBox>
        <Health>
          {hpLeft} / {hpTotal} hp
        </Health>
      </Container>
    );
  }
}

export default HealthBar;
