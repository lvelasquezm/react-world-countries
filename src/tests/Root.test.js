import React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from "@apollo/react-testing";
import wait from 'waait';
import { act } from 'react-dom/test-utils';

import Root from '../containers/Root';
import Home from '../containers/pages/Home';
import Countries from '../containers/pages/Countries';

import { messages } from '../data';
import { mocks, mockCountries } from './mocks';

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
    CountriesWithProvider = shallow(
      <MockedProvider mocks={mocks} addTypename={false}>
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
    CountriesWithProvider = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
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
    ).toEqual(1);
  });

  it('displays an error message when there is a failure fetching the list of countries', async () => {
    // Mock error response
    const errorMocks = [...mocks];
    errorMocks[0].result = null;
    errorMocks[0].error = new Error();

    // Mount new component with MockedProvider with errors
    CountriesWithProvider = mount(
      <MockedProvider mocks={errorMocks} addTypename={false}>
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
