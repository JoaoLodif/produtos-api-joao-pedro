let produtos = [];
let nextId = 1;

const listar = (req, res) => {
    res.status(200).json(produtos);
};

const buscarPorId = (req, res) => {
    const produto = produtos.find(p => p.id === Number(req.params.id));
    if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado" });
    }
    res.status(200).json(produto);
};

const criar = (req, res) => {
};

const atualizar = (req, res) => {
};

const remover = (req, res) => {
};

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    remover
};