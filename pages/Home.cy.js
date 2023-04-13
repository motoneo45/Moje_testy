class Home_Menu{
    visit(){
        cy.visit('https://www.edu.goit.global/account/login');
    }

    wyloguj(){
        cy.get('#open-navigation-menu-mobile').click();
        cy.get('.e1phyiqy2').last().click();
    }

}
export default Home_Menu;