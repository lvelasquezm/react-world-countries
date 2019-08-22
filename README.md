# Code Challenge for Scoutbase

If you’re reading this, then you’ve applied for a position at Scoutbase.

This directory includes two subdirectories:

- `front-end` with focus on React, SSR, Apollo & `styled-components`
- `back-end` with focus on SQL, Node.js, GraphQL

You can do one or you can do two.

## Instructions

You have received this directory within the .zip archive.

1. Create a repo out of the directory with this `README.md` in the root of it.
2. Work on either task following the guidelines in `README.md` within chosen directory.
3. Follow best practices of saving changes to the repo.
4. Upload the repo to your personal Github account and share it with two collaborators:
  1. `Yaass` username – Yassin Askar, co-founder of Scoutbase
  2. `kuka` username – Kuanysh, consultant
5. Expect a response within 10 working days after sharing the task, you’ll be contacted with the info you’ve provided during initial registration.

----------------------------------------------
----------------------------------------------

## Demo
[Demo](https://react-world-countries.web.app/)

## Development instructions
1. Clone this repo
2. Run `yarn` or `yarn install` to install libraries/dependencies
3. Run `yarn start` to start local/development host

## Unit tests
Run `yarn test` to run unit tests. Unit tests were created using these packages:
- [`@apollo/react-testing`](https://www.apollographql.com/docs/react/api/react-testing/)
- [`enzyme`](https://airbnb.io/enzyme/)
- [`enzyme-adapter-react-16`](https://airbnb.io/enzyme/docs/installation/react-16.html)
- [`expect`](https://jestjs.io/docs/en/expect.html)
- [`waait`](https://github.com/wesbos/waait)
- [`react-dom/test-utils`](https://reactjs.org/docs/test-utils.html)

Unit tests cover:
- `Root` component: React app entry point)
- `Home` component: Home page
- `Countries` component: Country list page listing all countries fetched from GraphQL service.
- `Country` component: Country detail page listing the details of a country fetched from GraphQL service.
