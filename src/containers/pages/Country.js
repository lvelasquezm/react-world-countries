import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import Title from '../components/Title';

import { messages } from '../../data';

const CustomTitle = styled(Title)`
  margin-bottom: 20px;
  margin-top: 20px;
`;

const InfoBox = styled.div`
  background-color: ${props => props.theme.cyan};
  border: 1px solid ${props => props.theme.cyanHover};
  border-radius: 3px;
  color: ${props => props.theme.white};
  margin-bottom: 10px;
  padding: 10px;

  &.alternate {
    background-color: ${props => props.theme.deepPurple};
    border: 1px solid ${props => props.theme.deepPurpleHover};
  }

  > span {
    display: block;
    font-weight: bold;
    text-align: center;
    margin-bottom: 5px;

    &:last-child {
      font-size: 22px;
      margin-bottom: 0;
    }
  }

  .languages {
    text-align: center;

    span {
      font-weight: bold;
    }
  }
`;

const countryData = {
  "code": null,
  "name": "Zimbabwe",
  "currency": "USD,ZAR,BWP,GBP,AUD,CNY,INR,JPY",
  "phone": "263",
  "languages": [
    {
      "name": "English",
      "native": "English"
    },
    {
      "name": "Shona",
      "native": "chiShona"
    },
    {
      "name": "North Ndebele",
      "native": "Sindebele"
    }
  ],
  "continent": {
    "code": "AF",
    "name": "Africa"
  }
};

const Country = ({ match }) => (
  <Container>
    <Row>
      <Col md="12" lg="12" xs="12">
        <CustomTitle
          center
          size="30px"
          text={countryData.name}
          className={`color-${countryData.continent.code}`}
        />
      </Col>
    </Row>
    <Row>
      <Col md="6" lg="6" xs="12">
        <InfoBox>
          <span>{messages.locatedIn}</span>
          <span>{countryData.continent.name}</span>
        </InfoBox>
      </Col>
      <Col md="6" lg="6" xs="12">
        <InfoBox>
          <span>{messages.areaCode}</span>
          <span>+{countryData.phone}</span>
        </InfoBox>
      </Col>
    </Row>
    <Row>
      <Col md="12" lg="12" xs="12">
        <InfoBox className="alternate">
          <span>{messages.languagesSpoken}</span>
          {
            countryData.languages.map((language, i) => (
              language.native && language.name &&
                <div key={i} className="languages">
                  <span>{language.name}</span> {messages.nativeHelper} <span>{language.native}</span>
                </div>    
            ))
          }
        </InfoBox>
      </Col>
    </Row>
    <Row>
      <Col md="12" lg="12" xs="12">
        <InfoBox>
          <span>{messages.currenciesUsed}</span>
          <span>{countryData.currency}</span>
        </InfoBox>
      </Col>
    </Row>
  </Container>
);

export default Country;
