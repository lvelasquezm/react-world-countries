import styled, { css, keyframes } from 'styled-components';
import { Col } from 'styled-bootstrap-grid';

export const centerFlex = css`
  display: flex;
  align-item: center;
  justify-content: center;
`;

export const CenteredCol = styled(Col)`
  ${centerFlex}
`;

export const badge = css`
  border-radius: 3px;
  color: ${props => props.theme.white};
  display: inline-block;
  font-size: 14px;
  min-width: 50px;
  padding: 2px 5px;
  text-align: center;
`;

export const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const cta = css`
  background-color: ${props => props.theme.btnBackground};
  border-radius: 3px;
  color: ${props => props.theme.white};
  display: inline-block;
  text-decoration: none;
  padding: 10px 20px;
  width: auto;

  &:hover {
    background-color: ${props => props.theme.btnBackgroundHover};
  }
`;
