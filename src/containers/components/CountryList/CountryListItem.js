import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import Title from '../../components/Title';

import { badge } from '../../../utils/styles';
import { messages } from '../../../data';

const ItemContainer = styled(Container)`
  border-bottom: 1px solid ${props => props.theme.gray};
  border-radius: 3px;
  cursor: pointer;
  height: auto;
  padding: 15px;
  width: 100%;

  &:first-child {
    border-top: 1px solid ${props => props.theme.gray};
  }

  &:hover {
    background-color: ${props => props.theme.lightGray};
  }
`;

const CustomTitle = styled(Title)`
  &.title-AF {
    color: ${props => props.theme.indigoHover};
  }

  &.title-AN {
    color: ${props => props.theme.lightBlueHover};
  }

  &.title-AS {
    color: ${props => props.theme.tealHover};
  }

  &.title-EU {
    color: ${props => props.theme.purpleHover};
  }

  &.title-NA {
    color: ${props => props.theme.orangeHover};
  }

  &.title-OC {
    color: ${props => props.theme.brownHover};
  }

  &.title-SA {
    color: ${props => props.theme.blueGrayHover};
  }
`;

const ItemBadge = styled.span`
  ${badge}
  font-size: 14px;
  margin-left: 30px;

  &.badge-AF {
    background-color: ${props => props.theme.indigo};
    border: 1px solid ${props => props.theme.indigoHover};
  }

  &.badge-AN {
    background-color: ${props => props.theme.lightBlue};
    border: 1px solid ${props => props.theme.lightBlueHover};
  }

  &.badge-AS {
    background-color: ${props => props.theme.teal};
    border: 1px solid ${props => props.theme.tealHover};
  }

  &.badge-EU {
    background-color: ${props => props.theme.purple};
    border: 1px solid ${props => props.theme.purpleHover};
  }

  &.badge-NA {
    background-color: ${props => props.theme.orange};
    border: 1px solid ${props => props.theme.orangeHover};
  }

  &.badge-OC {
    background-color: ${props => props.theme.brown};
    border: 1px solid ${props => props.theme.brownHover};
  }

  &.badge-SA {
    background-color: ${props => props.theme.blueGray};
    border: 1px solid ${props => props.theme.blueGrayHover};
  }
`;

const ItemMeta = styled.div`
  h3 {
    font-weight: normal;
    font-size: 14px;
    margin-bottom: 5px;
    margin-top: 10px;
  }

  div {
    &:not(last-child) {
      margin-bottom: 5px;
    }

    span {
      ${badge}
      font-size: 13px;

      &:first-child {
        background-color: ${props => props.theme.badgeLightGray};
        border: 1px solid ${props => props.theme.badgeLightGrayHover};
      }

      &:last-child {
        background-color: ${props => props.theme.badgeGray};
        border: 1px solid ${props => props.theme.badgeGrayHover};
        margin-right: 10px;
      }
    }
  }
`;

const CountryListItem = ({ country }) => (
  <ItemContainer>
    <Row>
      <Col md="12" lg="12" xs="12">
        <CustomTitle
          size="22px"
          text={country.name}
          display="inline-block"
          className={`title-${country.continent.code}`}
        />
        <ItemBadge className={`badge-${country.continent.code}`}>
          {country.continent.name}
        </ItemBadge>
      </Col>
      <Col md="12" lg="12" xs="12">
        <ItemMeta>
          <h3>{messages.languages}</h3>
          {
            country.languages.map((language, i) => (
              language.native && language.name &&
                <div key={i}>
                  <span>{language.native}</span> or <span>{language.name}</span>
                </div>    
            ))
          }
        </ItemMeta>
      </Col>
    </Row>
  </ItemContainer>
);

export default CountryListItem;
