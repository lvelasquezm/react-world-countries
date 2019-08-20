import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleElement = styled.div`
  line-height: 1;
  font-weight: bold;
  font-size: ${props => props.size || '24px'}
  text-align: ${props => props.center ? 'center' : 'left'}
  color: ${props => props.color || props.theme.foreground}
`;

const Title = props => <TitleElement {...props}>{props.text}</TitleElement>;

Title.propTypes = {
  size: PropTypes.string,
  center: PropTypes.bool,
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Title;
