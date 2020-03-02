const relatorioAnalitico = require("../element/relatorios-page");
class RelatorioPage {
    constructor(cy) {
        this.cy = cy;
    }

    gerarRelatorioAnalitico() {
        this.cy.get(relatorioAnalitico.relatorios).click();
        this.cy.get(relatorioAnalitico.estoque).click();
        this.cy.get(relatorioAnalitico.compras).click();
        this.cy.get(relatorioAnalitico.select_filial).select(155);
        this.cy.get(relatorioAnalitico.select_tipo_relatorio).select(1);
        this.cy.get(relatorioAnalitico.form_relatorio).contains("Tipo de Produto:");
        this.cy.get(relatorioAnalitico.filtros_adicionais).click();
        this.cy.get(relatorioAnalitico.selec_todos).click();
        this.cy.get(relatorioAnalitico.btn_salvar).click();
        cy.url().should('eq', 'https://syscor-sandbox.before.com.br/_sys/relComprasVisao.php?co_ativo=2&data_inicio=01/03/2020&data_fim=02/03/2020&tipo_rel=0&tm_id=&compra=&rel=1')
    }
}
module.exports = cy => ({ RelatorioPage: new RelatorioPage(cy) });

