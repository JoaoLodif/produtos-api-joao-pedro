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
    const { nome, descricao, preco, categoria, estoque } = req.body;

    if (!nome) return res.status(400).json({ erro: "O campo 'nome' é obrigatório", campo: "nome" });
    if (!descricao) return res.status(400).json({ erro: "O campo 'descricao' é obrigatório", campo: "descricao" });
    if (preco === undefined || preco <= 0) return res.status(400).json({ erro: "O campo 'preco' é obrigatório e deve ser maior que zero", campo: "preco" });
    if (!categoria) return res.status(400).json({ erro: "O campo 'categoria' é obrigatório", campo: "categoria" });
    if (estoque === undefined || estoque < 0) return res.status(400).json({ erro: "O campo 'estoque' é obrigatório e deve ser maior ou igual a zero", campo: "estoque" });

    const novoProduto = {
        id: nextId++,
        nome,
        descricao,
        preco,
        categoria,
        estoque,
        ativo: true,
        criado_em: new Date().toISOString(),
        atualizado_em: new Date().toISOString()
    };

    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
};

const atualizar = (req, res) => {
    const index = produtos.findIndex(p => p.id === Number(req.params.id));
    if (index === -1) {
        return res.status(404).json({ erro: "Produto não encontrado" });
    }

    const { nome, descricao, preco, categoria, estoque, ativo } = req.body;
    
    produtos[index] = {
        ...produtos[index],
        nome: nome || produtos[index].nome,
        descricao: descricao || produtos[index].descricao,
        preco: preco !== undefined ? preco : produtos[index].preco,
        categoria: categoria || produtos[index].categoria,
        estoque: estoque !== undefined ? estoque : produtos[index].estoque,
        ativo: ativo !== undefined ? ativo : produtos[index].ativo,
        atualizado_em: new Date().toISOString()
    };

    res.status(200).json(produtos[index]);
};

const remover = (req, res) => {
    const index = produtos.findIndex(p => p.id === Number(req.params.id));
    if (index === -1) {
        return res.status(404).json({ erro: "Produto não encontrado" });
    }

    produtos.splice(index, 1);
    res.status(204).send();
};

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    remover
};