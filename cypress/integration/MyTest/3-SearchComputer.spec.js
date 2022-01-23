/// <reference types="cypress" />

const computerTestData = require("../../fixtures/computerData.json");
const dashboardPage = require("../../pages/Dashboard.js");
const createComputerPage = require("../../pages/CreateComputer.js")

describe('Add Computer', () => {

    beforeEach('preconditon', () => {
        cy.visit(Cypress.env("url"));
    });

    it('validate url', () => {
        cy.url()
            .should('equal','https://computer-database.gatling.io/computers');
    });

    it('add new computer', () => {
        dashboardPage.clickAddComputer();
        createComputerPage.editComputerName(computerTestData.computerName);
        createComputerPage.editCompanyName(computerTestData.companyName);
        createComputerPage.clickCreateComputer();

        /*cy.get('#name').type(computerTestData.computerName);
        cy.get('#company').select(computerTestData.companyName);
        cy.get('[value="Create this computer"]').click();*/
    });

    it('search computer', () => {
        dashboardPage.editSearchComputer(computerTestData.searchData);
        dashboardPage.clickSearchButton();
        dashboardPage.getSearchResultElement(computerTestData.searchData);

        /*cy.get('#searchbox').type(computerTestData.searchData);
        cy.get('#searchsubmit').click();
        cy.get('[class="computers zebra-striped"]>tbody>tr>td>a')
            .should('have.text',computerTestData.searchData);*/
    });

})