/// <reference types="cypress" />

import LogIn from "./pages/LogIn.cy";

const logIN = new LogIn();

describe("Testy logowania POP", ()=>{


    it('logowanko do goit podstawowe dane', () => {
      logIN.visit();
      logIN.zaloguj();
      logIN.wyloguj();
    })
});