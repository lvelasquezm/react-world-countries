import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import { rotateAnimation } from '../../utils/styles';

const Rotator = styled.div`
  border: 3px solid rgba(155, 155, 155, 0.5);
  border-top-color: ${props => props.theme.white};
  border-radius: 50%;
  display: block;
  height: 60px;
  margin: 0 auto;
  width: 60px;
  animation: ${rotateAnimation} .9s ease-in-out infinite;
`;

const Loader = () => (
  <Container>
    <Row>
      <Col md="12" lg="12" xs="12">
        <Rotator />
      </Col>
    </Row>
  </Container>
);

export default Loader;
