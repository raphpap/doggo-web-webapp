// Vendor
import React from 'react';
import styled from 'react-emotion';

// Theme
import theme from 'doggo/theme';

// Utils
import generateRandomNumber from 'doggo/utilities/generate-random-number';

const randomBork: () => Bork = () => {
  return {
    duration: generateRandomNumber(750, 1750),
    fontSize: generateRandomNumber(10, 40),
    id: generateRandomNumber(1000, 100000),
    rotation: generateRandomNumber(-35, 35),
    startTime: new Date().getTime(),
    xPosition: generateRandomNumber(-10, 95),
    yPosition: generateRandomNumber(-10, 95)
  };
};

// Element
interface BorkCopmonentProps {
  fontSize: number;
  rotation: number;
  xPosition: number;
  yPosition: number;
}

const Container = styled.div`
  position: relative;
  width: 400px;
  height: 100%;
`;

const BorkComponent = styled.div`
  position: absolute;
  top: ${({yPosition}: BorkCopmonentProps) => yPosition}%;
  left: ${({xPosition}: BorkCopmonentProps) => xPosition}%;
  transform: rotate(${({rotation}: BorkCopmonentProps) => rotation}deg);
  font-size: ${({fontSize}: BorkCopmonentProps) => fontSize}px;
  color: ${theme.colors.white.plain};
`;

// Types
interface Bork {
  duration: number;
  fontSize: number;
  rotation: number;
  startTime: number;
  id: number;
  xPosition: number;
  yPosition: number;
}

interface State {
  borks: Bork[];
}

export class BattleAnimation extends React.Component<{}, State> {
  public readonly state: State = {
    borks: []
  };

  private timer: any;

  public componentDidMount() {
    this.timer = setInterval(() => {
      this.newBork();
      this.clearBorks();
    }, 100);
  }

  public componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  public render() {
    const {borks} = this.state;
    return (
      <Container>
        {borks.map(({id, fontSize, rotation, xPosition, yPosition}) => (
          <BorkComponent
            key={id}
            {...{fontSize, rotation, xPosition, yPosition}}
          >
            bork
          </BorkComponent>
        ))}
      </Container>
    );
  }

  private newBork = () => {
    const {borks} = this.state;
    const newBork = randomBork();
    this.setState({borks: [...borks, newBork]});
  };

  private clearBorks = () => {
    const {borks} = this.state;
    const currentTime = new Date().getTime();
    const remainingBorks = borks.filter(({duration, startTime}) => {
      return currentTime < startTime + duration;
    });

    this.setState({borks: [...remainingBorks]});
  };
}

export default BattleAnimation;
