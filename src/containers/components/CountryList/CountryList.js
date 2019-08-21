import React from 'react';

import CountryListItem from './CountryListItem';

const CountryList = ({ countries }) => (
  countries.map(country => <CountryListItem key={country.code} country={country} />)
);

export default CountryList;
