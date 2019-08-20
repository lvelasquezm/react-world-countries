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
