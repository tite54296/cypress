import { eq } from "cypress/types/lodash";
import { NAVBAR_OPTIONS } from "../fixtures/navbar-elements";

describe('Testing different access within navigation bar', () => {
  it('validates navigation bar elements in cypress homepage', () => {
    cy.visit('https://www.cypress.io');
    cy.get('[class*="HeaderContent"] [aria-label="Return to cypress.io homepage"]')
      .should('have.attr', 'href', '/')
      .within(() => {
        cy.get('[src*="cypress-logo.png"]').should('be.visible');
      });
    cy.get('[class*="NavItem"] a').then((navbarElements) => {
      navbarElements.each((index, navbarElement) => {
        expect(navbarElement.getAttribute('aria-label')).to.equal(NAVBAR_OPTIONS[index]['aria-label']);
        expect(navbarElement.getAttribute('href')).to.equal(NAVBAR_OPTIONS[index].href);
        expect(navbarElement.innerText).to.equal(NAVBAR_OPTIONS[index].innerText);
      })
    });
  });

  it.only('verifies active navbar element is highlighted', () => {
    cy.visit('https://www.cypress.io');
    cy.get('[class*="NavList"]:nth-child(1)').eq(0).within(() => {
      cy.get('[class*="NavItem"] a').then((navbarElements) => {
        navbarElements.each((_, navbarElement) => {
          cy.wrap(navbarElement).click().invoke('attr', 'class').should('contain', 'is-active');
        })
      });
    })
  })
})
