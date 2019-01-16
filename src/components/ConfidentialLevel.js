import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme as mcsTheme } from 'mcs-ui';

const levelToColorMap = {
  A: mcsTheme.color.success,
  B: mcsTheme.color.warning,
  C: mcsTheme.color.error,
};

const Container = styled.div`
  color: ${({ level }) => levelToColorMap[level] || mcsTheme.color.error};
  font-size: ${mcsTheme.fontSize.small};
`;

export const ConfidentialLevel = ({ level }) => (
  <Container level={level}>Confidential {level && `Level ${level}`}</Container>
);

ConfidentialLevel.propTypes = {
  level: PropTypes.string,
};

export default ConfidentialLevel;
