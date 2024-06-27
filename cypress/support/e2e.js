// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

import "@argos-ci/cypress/support";
import "cypress-real-events";
require('dotenv').config();



// Alternatively you can use CommonJS syntax:
// require('./commands')
beforeEach(() => {
  // now this runs prior to every test
  // across all files no matter what
  if (Cypress.env('ignore_JS_Error')) {
    cy.on('uncaught:exception', (err, runnable) => {
      // return false to prevent the error from
      // failing this test
      return false
    })
  }

  // *****************   JS FILES ON PRODUCTION  *****************
  // cy.intercept({  
  //   method: 'GET',
  //   url: '/skin/frontend/delphinus/default/js_minify/14c35bccad767123698747c5cf6aadfa-1685092473.min.js',
  //   hostname: 'media.livoneo.de',
  // }).as('js_minify')

  cy.intercept({
    method: 'GET',
    url: '/js/widget.js',
    hostname: 'wchat.eu.freshchat.com',
  }).as('widget')

  cy.intercept({
    method: 'GET',
    url: '/skin/frontend/delphinus/default/js_minify/*.min.js',
    hostname: 'www.livoneo.de',
  }).as('js_minify')


  // NOT NEEDED / USED
  cy.intercept({
    method: 'GET',
    url: '/sirvjs/v3/sirv.js',
    hostname: 'scripts.sirv.com',
  }).as('sirv')

  // NOT NEEDED / USED
  cy.intercept({
    method: 'GET',
    url: 'js/lazyload/load-min.js',
    hostname: 'www.livoneo.de',
  }).as('lazyload')

})

//custom command to check visibility of nav menu container
Cypress.Commands.add('ignoreMenuContainer', () => {

  // menu css selector: #nav-menu-container
  cy.get('body').then(($body) => {
    if ($body.find('#nav-menu-container').length) {
      // iframe was found
      cy.get('#nav-menu-container').invoke('attr', 'data-visual-test', 'transparent');
    }
    else {
      cy.log('MENU CONTAINER NOT FOUND')
    }
  })
})

Cypress.Commands.overwrite('visit', (orig, url, options) => {
  options = options || {};
  if (process.env.STAGE_USER && process.env.STAGE_PASSW) {
    options.auth = {
      username: process.env.STAGE_USER,
      password: process.env.STAGE_PASSW
    };
  }
  return orig(url, options)
});