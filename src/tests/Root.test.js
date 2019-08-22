import React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import { MemoryRouter } from 'react-router-dom';

import Root from '../containers/Root';
import Home from '../containers/pages/Home';

import { messages } from '../data';

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
