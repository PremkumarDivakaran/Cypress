/// <reference types="cypress" />

describe('validate POST API', () =>{

    beforeEach(() =>{
        cy.request({
            method : 'POST',
            url : 'api/users'
        })
        .as('postRequest'); 
    });

    it('check response of POST Api', () =>{
        cy.get('@postRequest')
            .then(request => {
                expect(request.status).to.eq(200);        
            });

    });
});