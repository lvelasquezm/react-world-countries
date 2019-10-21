## Demo
[Demo](https://react-world-countries.web.app/)

## Development instructions
1. Clone this repo
2. Run `yarn` or `yarn install` to install libraries/dependencies
3. Run `yarn start` to start local/development host

## Unit tests
Run `yarn test` to run unit tests. Unit tests were created using these packages:
- [@apollo/react-testing](https://www.apollographql.com/docs/react/api/react-testing/)
- [enzyme](https://airbnb.io/enzyme/)
- [enzyme-adapter-react-16](https://airbnb.io/enzyme/docs/installation/react-16.html)
- [expect](https://jestjs.io/docs/en/expect.html)
- [waait](https://github.com/wesbos/waait)
- [react-dom/test-utils](https://reactjs.org/docs/test-utils.html)

Unit tests cover:
- [Root](https://github.com/lvelasquezm/react-world-countries/blob/master/src/containers/Root.js) component: React app entry point
- [Home](https://github.com/lvelasquezm/react-world-countries/blob/master/src/containers/pages/Home.js) component: Home page
- [Countries](https://github.com/lvelasquezm/react-world-countries/blob/master/src/containers/pages/Countries.js) component: Country list page listing all countries fetched from GraphQL service.
- [Country](https://github.com/lvelasquezm/react-world-countries/blob/master/src/containers/pages/Country.js) component: Country detail page listing the details of a country fetched from GraphQL service.
