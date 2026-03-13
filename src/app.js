const express = require('express');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

app.use((err, req, res, next) => {
    res.status(500).json({ erro: err.message });
});

app.listen(3000, () => {
    console.log('🚀 API de Produtos rodando na porta 3000');
});