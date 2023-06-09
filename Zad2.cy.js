/// <reference types="cypress" />

Cypress.Commands.add('logowanie', (email, password) => {
 cy.get ('#user_email').type(email);
 cy.get ('#user_password').type(password);
 cy.get('.eckniwg2').click(); 
})

describe("Testy logowania", ()=>{
    beforeEach(() => {
        cy.visit('https://www.edu.goit.global/account/login')
     })
    it('logowanko do goit podstawowe dane', () => {
        cy.pause();
        cy.logowanie('user888@gmail.com', '1234567890')
        cy.get('#open-navigation-menu-mobile').click()
        cy.get('.e1phyiqy2').last().click();
    })  


    beforeEach(() => {
        cy.visit('https://www.edu.goit.global/account/login')
     })
    it('logowanko do goit zawansowane dane', () => {
        cy.logowanie(' testowyqa@qa.team', 'QA!automation-1');
        cy.get('#open-navigation-menu-mobile').click();
        cy.get('.e1phyiqy2').last().click();
    }) 
});