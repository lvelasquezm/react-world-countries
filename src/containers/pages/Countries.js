import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import Title from '../components/Title';
import Loader from '../components/Loader';
import CountryList from '../components/CountryList/CountryList';

import { messages } from '../../data';
import { getCountries } from '../../utils/queries';

const CustomTitle = styled(Title)`
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Countries = () => {
  const { loading, error, data } = useQuery(getCountries);

  const renderContent = () => {
    let content = null;

    if (loading) {
      content = <Loader />;
    } else if (error) {
      content = <p>{messages.errorLoadingCountries}</p>;
    } else {
      content = <CountryList countries={data.countries} />;
    }

    return (
      <Container>
        <Row>
          <Col md="12" lg="12" xs="12">
            <CustomTitle
              size="26px"
              text={messages.countries}
            />
          </Col>
        </Row>
        <Row>
          <Col md="12" lg="12" xs="12">
            {content}
          </Col>
        </Row>
      </Container>
    );
  };

  return renderContent();
};

export default Countries;
