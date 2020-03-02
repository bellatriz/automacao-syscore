const { RelatorioPage } = require("../support/class/RelatorioAnalitico")(cy);

describe("Gerar Relatorio", () => {
    it("Gerar Relatorio Analitico", () => {
        RelatorioPage.gerarRelatorioAnalitico();
    })  
});