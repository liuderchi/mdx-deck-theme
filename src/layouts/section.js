import React from 'react';
import styled, { css } from 'styled-components';
import { theme as mcsTheme, LogoMTK } from 'mcs-ui';

import { Center, LogoBoxes } from '../components';
import ConfidentialLevel from '../components/ConfidentialLevel';
import colors from '../colors';

const Container = styled(Center)`
  height: 100vh;
  width: 100vw;

  position: relative;
  background-color: ${props =>
    props.inverted ? mcsTheme.color.primary : 'white'};

  h1 {
    text-align: left;
  }

  h2 {
    color: grey;
    font-weight: 400;
    text-align: left;
  }

  ${props =>
    props.inverted &&
    css`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      ul,
      li,
      p {
        color: white;
      }
    `};
`;

const LogoContainer = styled.div`
  position: absolute;

  top: 0;
  left: 0;
`;

export const MtkLogoContainer = styled.div`
  position: absolute;
  bottom: 5px;
  left: 5px;

  display: flex;
  > svg {
    transform: translateY(-2px);
  }
  > * + * {
    margin-left: 5px;
  }
`;

const SectionWithConfidential = level => ({ children, inverted, ...rest }) => (
  <Container inverted={inverted} {...rest}>
    <LogoContainer>
      <LogoBoxes inverted={inverted} />
    </LogoContainer>
    <MtkLogoContainer>
      <LogoMTK height={20} width={80} />
      <ConfidentialLevel level={level} />
    </MtkLogoContainer>
    {children}
  </Container>
);

export const SectionLevelA = SectionWithConfidential('A');
export const SectionLevelB = SectionWithConfidential('B');
export const SectionLevelC = SectionWithConfidential('C');

export default function Section({ children, inverted, ...rest }) {
  return (
    <Container inverted={inverted} {...rest}>
      <LogoContainer>
        <LogoBoxes inverted={inverted} />
      </LogoContainer>
      {children}
    </Container>
  );
}
