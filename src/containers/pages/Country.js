import React from 'react';

const Country = ({ match }) => (
  <h1>Country { match.params.code }!</h1>
);

export default Country;
