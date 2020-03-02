const { LoginPage } = require("../support/class/LoginPage")(cy);

describe("Realizar Login", () => {
    it("Escolher UF", () => {
        cy.visit("https://syscor-sandbox.before.com.br/_sys/");
        LoginPage.selecionarUF();
    });
    it("Login", () => {
        LoginPage.realizarLogin("betiz.menezes@gmail.com", "teste652");
    })
    
});