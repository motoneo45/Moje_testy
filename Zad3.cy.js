/// <reference types="cypress" />

import LogIn from "./pages/LogIn.cy.js";
import LogOut from "./pages/Logout.cy.js";

Cypress.Commands.add('logowanie', (email, password) => {
    const logIn = new LogIn();
    cy.get ('#user_email').type(email);
    cy.get ('#user_password').type(password);
    logIn.zaloguj();
})

Cypress.Commands.add('wyloguj',() =>{
    const logOut = new LogOut();
    logOut.wyloguj();
})


describe("Testy logowania", ()=>{
    beforeEach(() => {
        cy.visit('https://www.edu.goit.global/account/login')
     })
    it('logowanko do goit podstawowe dane', () => {
        cy.pause();
        cy.logowanie('user888@gmail.com', '1234567890');
        cy.wyloguj();
    })
    it('logowanko do goit zawansowane dane', () => {
        cy.pause();
        cy.logowanie(' testowyqa@qa.team', 'QA!automation-1');
        cy.wyloguj();
    }) 
});