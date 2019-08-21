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
