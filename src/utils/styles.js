import styled, { css } from 'styled-components';
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
