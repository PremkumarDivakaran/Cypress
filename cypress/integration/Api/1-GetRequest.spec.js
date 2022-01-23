/// <reference types="cypress" />

describe('validate GET API', () =>{

    beforeEach(() =>{
        cy.request({
            method : 'GET',
            url : '/api/users?page=1&id=1'
        })
        .as('getRequest');     
    });

    it('check response status of GET Api', () =>{
        cy.get('@getRequest')
            .then(request => {
                expect(request.status).to.eq(200);        
            });
    });

    it('check response body of GET Api', () =>{
        cy.get('@getRequest')
            .then(request => {
                cy.wrap(request.body).should('deep.include',{
                    "data": {
                        "id": 1,
                        "email": "george.bluth@reqres.in",
                        "first_name": "George",
                        "last_name": "Bluth",
                        "avatar": "https://reqres.in/img/faces/1-image.jpg"
                    },
                    "support": {
                        "url": "https://reqres.in/#support-heading",
                        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
                    }
                });      
            });
    });

});