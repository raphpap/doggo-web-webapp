// Vendor
import React, {Component} from 'react';
import styled from 'react-emotion';

// Theme
import theme from 'doggo/theme';

interface CircleProps {
  statType: StatType;
}

const getStatColor = (statType: StatType) => {
  if (statType === StatType.Attack) return '#63c7b2';
  return '#8e6c88';
};

const getStatLabel = (statType: StatType) => {
  if (statType === StatType.Attack) return 'Atk/';
  return 'Def/';
};

// Elements
const Container = styled.svg`
  display: block;
  height: 100%;
`;

const CircleBackground = styled.path`
  fill: none;
  stroke: #eee;
  stroke-width: 4;
`;

const Circle = styled.path`
  fill: none;
  stroke: ${({statType}: CircleProps) => getStatColor(statType)};
  stroke-linecap: round;
  stroke-width: 3;
`;

const Percentage = styled.text`
  fill: ${theme.colors.white.plain};
  font-size: 0.4em;
  text-anchor: middle;
`;

export enum StatType {
  Attack = 'attack',
  Defense = 'defense'
}

// Types
interface Props {
  percentage: number;
  statType: StatType;
}

export class StatDonut extends Component<Props> {
  public render() {
    const {percentage, statType} = this.props;

    const circleProps = {
      statType
    };

    return (
      <Container viewBox={'0 0 36 36'}>
        <CircleBackground d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />

        <Circle
          {...circleProps}
          strokeDasharray={`${percentage}, 100`}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />

        <Percentage x="18" y="20.35">
          {getStatLabel(statType)}
          {percentage}
        </Percentage>
      </Container>
    );
  }
}

export default StatDonut;
