import React from 'react';
import { Helmet } from "react-helmet";
import { BaseCSS } from 'styled-bootstrap-grid';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Router from './Router';

import mainTheme from '../themes/main';
import { appSettings } from '../data';

// Base/Global styles (reusable all over the app)
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Sarabun:200i,400,800');

  html {
    font-size: ${props => props.theme.fontBaseSize};
  }
  
  body {
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.foreground};
    font-family: ${props => props.theme.fontFamily};
    font-style: normal;
    font-weight: lighter;
    font-size: ${props => props.theme.fontBaseSize};
    line-height: 1.5;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const App = () => (
  <ThemeProvider theme={mainTheme}>
    <React.Fragment>
      {/*
        * Helmet allows us to inject custom <head></head> content without
        * editing the static index.html page in /public directory.
        */}
      <Helmet>
        <meta name="viewport" content={appSettings.viewportSettings}/>
      </Helmet>

      {/*
        * Global CSS styles
        */}
      <GlobalStyles />

      {/*
        * Bootstrap's base CSS
        * https://github.com/dragma/styled-bootstrap-grid#prerequisites
        */}
      <BaseCSS />

      {/*
        * React component with routes
        */}
      <Router />
    </React.Fragment>
  </ThemeProvider>
);

export default App;
