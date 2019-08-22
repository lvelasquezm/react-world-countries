import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { NavLink } from 'react-router-dom';

import Title from '../components/Title';
import Loader from '../components/Loader';

import { messages } from '../../data';
import { getCountry } from '../../utils/queries';
import { CenteredCol, cta } from '../../utils/styles';

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

const CustomNavLink = styled(NavLink)`
  ${cta}
`;

const Country = ({ match }) => {
  const { loading, error, data } = useQuery(getCountry(match.params.code));

  const renderContent = () => {
    let content = null;

    if (loading) {
      content = <Loader />;
    } else if (error || !data || !data.country) {
      content = <p>{messages.errorLoadingCountry}</p>;
    } else {
      content = (
        <Container>
          <Row>
            <Col md="12" lg="12" xs="12">
              <CustomTitle
                center
                size="30px"
                text={data.country.name}
                className={`color-${data.country.continent.code} country-name`}
              />
            </Col>
          </Row>
          <Row>
            <Col md="6" lg="6" xs="12">
              <InfoBox>
                <span>{messages.locatedIn}</span>
                <span className="country-continent">{data.country.continent.name}</span>
              </InfoBox>
            </Col>
            <Col md="6" lg="6" xs="12">
              <InfoBox>
                <span>{messages.areaCode}</span>
                <span className="country-phone-code">+{data.country.phone}</span>
              </InfoBox>
            </Col>
          </Row>
          <Row>
            <Col md="12" lg="12" xs="12">
              <InfoBox className="alternate">
                <span>{messages.languagesSpoken}</span>
                {
                  data.country.languages.map((language, i) => (
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
                <span className="country-currency">{data.country.currency}</span>
              </InfoBox>
            </Col>
          </Row>
          <Row>
            <CenteredCol md="12" lg="12" xs="12">
              <CustomNavLink
                to="/countries"
                exact
              >
                {messages.appCtaBack}
              </CustomNavLink>
            </CenteredCol>
          </Row>
        </Container>
      );
    }

    return content;
  };

  return renderContent();
};

export default Country;
