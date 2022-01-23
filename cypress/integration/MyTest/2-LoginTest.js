/// <reference types="cypress" />

it("OrangeHRM Login", () =>{

    cy.visit('https://demo.guru99.com/test/newtours/')
    cy.get(':nth-child(2) > [width="112"] > input').type('admin')
    cy.get(':nth-child(3) > [width="112"]').type('admin')
    cy.get('div > input').click()

})