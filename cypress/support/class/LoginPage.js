const loginPage = require("../element/login-page");
const selecionarUFPage = require("../element/selecionar-uf-page-elements");
class LoginPage {
    constructor(cy) {
        this.cy = cy;
    }

    selecionarUF() {
        this.cy.get(selecionarUFPage.select_estado.element).select("RJ");
        this.cy.get(selecionarUFPage.btn_acessar).click();
    }

    realizarLogin(email, senha) {
        this.cy.get(loginPage.input_login).type(email);
        this.cy.get(loginPage.input_senha).type(senha);
        this.cy.get(loginPage.btn_entrar).click();
        cy.url().should('eq', 'https://syscor-sandbox.before.com.br/_sys/main.php?logUfIdSession=0')
    }
}
module.exports = cy => ({ LoginPage: new LoginPage(cy) });

