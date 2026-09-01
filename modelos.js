class Ave {
    constructor(nome_comum, nome_cientifico, imagem) {
        this.nome_comum = nome_comum;
        this.nome_cientifico = nome_cientifico;
        this.descricao = descricao;
        this.cor = cor;
        this.alimento = alimento;
        this.imagem = imagem
    }
}

class Avistamento {
    constructor(data, local, ave, descricao) {
        this.data = {
            dia : data["dia"],
            mes : data["mes"],
            ano : data["ano"],
        };
        this.local = local;
        this.ave = ave;
        this.descricao = descricao;
    }
}

