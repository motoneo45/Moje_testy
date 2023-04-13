/// <reference types="cypress" />

import LogIn from "./pages/LogIn.cy";
import Home_Menu from "./pages/Home.cy";

const logIN = new LogIn();
const home_menu = new Home_Menu();

describe("Testy logowania POP", ()=>{


    it('logowanko do goit podstawowe dane', () => {
      logIN.visit();
      logIN.zaloguj();
      home_menu.wyloguj();
      logIN.zaloguj_dodatkowe_dane();
      home_menu.wyloguj();
    })
});