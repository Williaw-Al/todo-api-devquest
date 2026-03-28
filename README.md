# Todo Backend

## Descrição

API RESTful desenvolvida com Node.js, Express e Prisma para gerenciamento de tarefas (todos). Oferece endpoints para criar, ler, atualizar e deletar tarefas.

## Tecnologias

- Node.js
- Express
- Prisma ORM
- Docker
- SQLite/PostgreSQL

## Endpoints

### Tarefas

- `GET /todos` - Listar todas as tarefas
- `POST /todos` - Criar nova tarefa
- `PUT /todos/:id` - Atualizar tarefa
- `DELETE /todos/:id` - Deletar tarefa

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgres://user:password@localhost:5432/todos-api"
```

## Instalação

0. **Git clone:**

```bash
git clone git@github.com:Williaw-Al/todo-api-devquest.git
```
```bash
git clone https://github.com/Williaw-Al/todo-api-devquest.git
```

1. **Instale as dependências:**

```bash
npm install
```

2. **Inicie os serviços com Docker:**

```bash
docker compose up
```

3. **Gere o cliente Prisma: (lembre-se de criar o arquivo .env)**

```bash
npx prisma generate
```

4. **Inicie o projeto:**

```bash
npm run dev
```

A API estará disponível em `http://localhost:3000`

5. **Use o Swagger para interagir com o projeto:**

Com a api rodando, estará disponível em `http://localhost:3000/docs`

6. **Projeto Frontend (Opcional)**

Se deseja um projeto simples para utilizar este backend, utilize o arquivo de frontend: (/src/assets/todo-frontend.zip)

[📥 Baixar Frontend](/src/assets/frontend.zip)

## Finalizando

Projeto simples de todos. Infelizmente meu computador é muito lento para brincar com elementos mais interativos, mas aos poucos vou tentar achar soluções e trazer algo mais inovador!

Até mais 🦉️
