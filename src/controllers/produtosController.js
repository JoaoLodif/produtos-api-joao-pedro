let produtos = [];
let nextId = 1;

const listar = (req, res) => {
    res.status(200).json(produtos);
};

const buscarPorId = (req, res) => {
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