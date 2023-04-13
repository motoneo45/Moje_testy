class LogIn{
    visit(){
        cy.visit('https://www.edu.goit.global/account/login');
    }

    zaloguj(){
        cy.get ('#user_email').should("be.visible").type('user888@gmail.com');
        cy.get ('#user_password').should("be.visible").type('1234567890');
        cy.get('.eckniwg2').should("be.visible").click(); 
    }

     zaloguj_dodatkowe_dane(){
        cy.get ('#user_email').should("be.visible").type('testowyqa@qa.team');
        cy.get ('#user_password').should("be.visible").type('QA!automation-1');
        cy.get('.eckniwg2').should("be.visible").click(); 
    }
}
export default LogIn;