# API REST de Produtos

**Aluno:** João Pedro Lodi França  
**Matrícula:** 202501007953

## Descrição
Trabalho individual de Projeto de Desenvolvimento Backend. Consiste em uma API RESTful completa desenvolvida com Node.js e Express para realizar operações CRUD em um recurso de "produtos".

## Instruções de Execução

1. Instale as dependências do projeto:
```bash
npm install
```

2. Inicie o servidor em modo de desenvolvimento:
```bash
npm run dev
```

A API estará rodando localmente na porta 3000 (http://localhost:3000).

## Endpoints da API

| Verbo | Path | Descrição | Status esperado |
|-------|------|-----------|-----------------|
| GET | /api/v1/produtos | Lista todos os produtos | 200 OK |
| GET | /api/v1/produtos/:id | Retorna um produto pelo ID | 200 OK / 404 Not Found |
| POST | /api/v1/produtos | Cria um novo produto | 201 Created / 400 Bad Request |
| PUT | /api/v1/produtos/:id | Atualiza completamente um produto | 200 OK / 404 Not Found |
| DELETE | /api/v1/produtos/:id | Remove um produto | 204 No Content / 404 Not Found |