import { getCountries, getCountry } from '../../utils/queries';

export const mockCountries = [
  {
    "code": "DK",
    "name": "Denmark",
    "currency": "DKK",
    "phone": "45",
    "languages": [
      {
        "name": "Danish",
        "native": "Dansk"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  },
  {
    "code": "NI",
    "name": "Nicaragua",
    "currency": "NIO",
    "phone": "505",
    "languages": [
      {
        "name": "Spanish",
        "native": "Español"
      }
    ],
    "continent": {
      "code": "NA",
      "name": "North America"
    }
  },
  {
    "code": "BE",
    "name": "Belgium",
    "currency": "EUR",
    "phone": "32",
    "languages": [
      {
        "name": "Dutch",
        "native": "Nederlands"
      },
      {
        "name": "French",
        "native": "Français"
      },
      {
        "name": "German",
        "native": "Deutsch"
      }
    ],
    "continent": {
      "code": "EU",
      "name": "Europe"
    }
  }
];

export const mocks = [
  {
    request: {
      query: getCountries
    },
    result: {
      data: {
        countries: mockCountries
      }
    }
  },
  {
    request: {
      query: getCountry(mockCountries[0].code)
    },
    result: {
      data: {
        country: mockCountries[0]
      }
    }
  }
];

export const mockMatch = {
  params: {
    code: mockCountries[0].code
  }
};
