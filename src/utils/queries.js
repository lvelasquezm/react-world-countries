import { gql } from 'apollo-boost';

export const getCountries = gql`
  {
    countries {
      code,
      name,
      languages {
        name,
        native
      },
      continent {
        code,
        name
      }
    }
  }
`;

export const getCountry = code => gql`
  {
    country (code: "${code}") {
      code,
      name,
      currency,
      phone,
      languages {
        name,
        native
      },
      continent {
        code,
        name
      }
    }
  }
`;
