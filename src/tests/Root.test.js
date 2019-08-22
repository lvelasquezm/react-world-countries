import React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from "@apollo/react-testing";
import wait from 'waait';
import { act } from 'react-dom/test-utils';

import Root from '../containers/Root';
import Home from '../containers/pages/Home';
import Countries from '../containers/pages/Countries';
import Country from '../containers/pages/Country';

import { messages } from '../data';
import { mocks, mockCountries, mockMatch } from './mocks';

configure({ adapter: new Adapter() });

describe('Root component <Root />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Root />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Home page <Home />', () => {
  let HomeWithRouter = null;
  beforeEach(() => {
    HomeWithRouter = mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });

  it('check app welcome message', () => {
    let appTitle = HomeWithRouter.find('.app-title').first().text();
    expect(appTitle).toEqual(messages.appWelcome);
  });

  it('check app CTA button text', () => {
    let ctaButtonText = HomeWithRouter.find('a').first().text();
    expect(ctaButtonText).toEqual(messages.appCta);
  });
});

describe('Country list page <Countries />', () => {
  let CountriesWithProvider = null;
  beforeEach(() => {
    CountriesWithProvider = mount(
      <MockedProvider mocks={[mocks[0]]} addTypename={false}>
        <MemoryRouter>
          <Countries />
        </MemoryRouter>
      </MockedProvider>
    );
  });

  it('renders with MockedProvider mocking Apollo GraphQL provider', () => {
    expect(CountriesWithProvider).toBeDefined();
  });

  it('displays the list of countries (3 items)', async () => {
    // Wait for the query to be executed and update the component
    await act(async () => {
      await wait(0);
      CountriesWithProvider.update();
    });

    const listItems = CountriesWithProvider.find('div.country-list-item');
    expect(listItems.length).toEqual(3);

    const firstItem = listItems.first();
    expect(
      firstItem
        .find('.country-list-item-name')
        .first()
        .text()
    ).toEqual(mockCountries[0].name);
    expect(
      firstItem
        .find('.country-list-item-continent')
        .first()
        .text()
    ).toEqual(mockCountries[0].continent.name);
    expect(
      firstItem
        .find('.country-list-item-languages')
        .length
    ).toEqual(mockCountries[0].languages.length);
  });

  it('displays an error message when there is a failure fetching the list of countries', async () => {
    // Mock error response
    const errorMocks = [...mocks];
    errorMocks[0].result = null;
    errorMocks[0].error = new Error();

    // Mount new component with MockedProvider with errors
    CountriesWithProvider = mount(
      <MockedProvider mocks={[errorMocks[0]]} addTypename={false}>
        <MemoryRouter>
          <Countries />
        </MemoryRouter>
      </MockedProvider>
    );

    // Wait for the query to be executed and update the component
    await act(async () => {
      await wait(0);
      CountriesWithProvider.update();
    });

    const errorMessage = CountriesWithProvider.find('p').first().text();
    expect(errorMessage).toEqual(messages.errorLoadingCountries);
  });
});

describe('Country details page <Country />', () => {
  let CountryWithProvider = null;
  beforeEach(() => {
    CountryWithProvider = mount(
      <MockedProvider mocks={[mocks[1]]} addTypename={false}>
        <MemoryRouter>
          <Country match={mockMatch} />
        </MemoryRouter>
      </MockedProvider>
    );
  });

  it('renders with MockedProvider mocking Apollo GraphQL provider', () => {
    expect(CountryWithProvider).toBeDefined();
  });

  it('displays the country details (for Denmark)', async () => {
    // Wait for the query to be executed and update the component
    await act(async () => {
      await wait(0);
      CountryWithProvider.update();
    });

    const itemName = CountryWithProvider.find('.country-name').first().text();
    const itemContinent = CountryWithProvider.find('.country-continent').first().text();
    const itemPhoneCode = CountryWithProvider.find('.country-phone-code').first().text();
    const itemCurrency = CountryWithProvider.find('.country-currency').first().text();

    expect(itemName).toEqual(mockCountries[0].name);
    expect(itemContinent).toEqual(mockCountries[0].continent.name);
    expect(itemPhoneCode).toEqual(`+${mockCountries[0].phone}`);
    expect(itemCurrency).toEqual(mockCountries[0].currency);
  });

  it('displays an error message when there is a failure fetching the country details', async () => {
    // Mock error response
    const errorMocks = [...mocks];
    errorMocks[1].result = null;
    errorMocks[1].error = new Error();

    // Mount new component with MockedProvider with errors
    CountryWithProvider = mount(
      <MockedProvider mocks={[errorMocks[1]]} addTypename={false}>
        <MemoryRouter>
          <Country match={mockMatch} />
        </MemoryRouter>
      </MockedProvider>
    );

    // Wait for the query to be executed and update the component
    await act(async () => {
      await wait(0);
      CountryWithProvider.update();
    });

    const errorMessage = CountryWithProvider.find('p').first().text();
    expect(errorMessage).toEqual(messages.errorLoadingCountry);
  });
});
