class LogIn{
    visit(){
        cy.visit('https://www.edu.goit.global/account/login');
    }

    zaloguj(){
        cy.get ('#user_email').should("be.visible").type('user888@gmail.com');
        cy.get ('#user_password').should("be.visible").type('1234567890');
        cy.get('.eckniwg2').should("be.visible").click(); 
    }

    wyloguj(){
        cy.get('#open-navigation-menu-mobile').click();
        cy.get('.e1phyiqy2').last().click();
     }
}
export default LogIn;