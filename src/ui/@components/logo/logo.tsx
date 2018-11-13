// Vendor
import React from 'react';
import styled from 'react-emotion';

// Theme
import theme from 'doggo/theme';

interface LogoProps {
  logo: string;
  marginUnits?: number;
  height?: string;
}

const getMargin = (nbUnits: number, unitValue: number) => {
  return `${nbUnits * unitValue}px`;
};

export const LogoComponent = styled.img`
  display: block;
  width: auto;
  max-width: 440px;
  height: ${({height}: LogoProps) => (height ? height : '100%')};
  margin: ${({marginUnits}: LogoProps) =>
    getMargin(marginUnits || 1, theme.margin.unit)};
`;

export class Logo extends React.Component<LogoProps> {
  public render() {
    const {logo} = this.props;

    return <LogoComponent {...this.props} src={logo} />;
  }
}

export default Logo;
