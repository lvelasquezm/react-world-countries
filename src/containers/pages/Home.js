import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'styled-bootstrap-grid';
import { NavLink } from 'react-router-dom';

import Title from '../components/Title';

import { messages, appSettings } from '../../data';
import { CenteredCol, cta } from '../../utils/styles';

const CustomTitle = styled(Title)`
  padding: 20px 0;
  margin-bottom: 20px;
`;

const Image = styled.img`
  max-width:100%;
  max-height:100%;
`;

const Caption = styled.p`
  text-align: center;
`;

const CustomNavLink = styled(NavLink)`
  ${cta}
`;

const Home = () => (
  <Container>
    <Row>
      <CenteredCol md="12" lg="12" xs="12">
        <CustomTitle
          center
          size="36px"
          text={messages.appWelcome}
        />
      </CenteredCol>
      <CenteredCol md="12" lg="12" xs="12">
        <Image alt={messages.appName} src={appSettings.homeBackground}></Image>
      </CenteredCol>
      <CenteredCol md="12" lg="12" xs="12">
        <Caption>{messages.appCaption}</Caption>
      </CenteredCol>
      <CenteredCol md="12" lg="12" xs="12">
        <CustomNavLink
          to="/countries"
          exact
        >
          {messages.appCta}
        </CustomNavLink>
      </CenteredCol>
    </Row>
  </Container>
);

export default Home;
