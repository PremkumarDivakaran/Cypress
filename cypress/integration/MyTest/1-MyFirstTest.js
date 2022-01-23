/// <reference types="cypress"/>

it("My First Test", () => {
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('cypress learning{enter}')
    cy.get('.ExCKkf > svg').click()
    cy.get('input.gLFyf').type('selenium learning{enter}')
})