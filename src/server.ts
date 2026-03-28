import "dotenv/config";
import express from "express";
import cors from "cors";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Todo } from "./types";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
const app = express();

const port = 3000;

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/todos", async (req, res) => {
    console.log(req);
    try {
        const todos: Todo[] = await prisma.todo.findMany({
            orderBy: {
                id: "asc",
            },
        });
        res.status(200).json(todos);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro interno ao buscar todos" });
    }
});

app.post("/todos", async (req, res) => {
    const { done, title } = req.body;

    if (!title || done === null) {
        return res
            .status(400)
            .send({ message: "O title e done são obrigatório" });
    }

    try {
        const todo: Todo = await prisma.todo.create({
            data: { done, title },
        });
        res.status(201).json({ message: "Todo criado com sucesso", todo });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro interno ao criar todo" });
    }
});

app.put("/todos/:id", async (req, res) => {
    const { id } = req.params;
    const { done } = req.body;

    try {
        const todoExists: Todo = await prisma.todo.findUnique({
            where: { id: Number(id) },
        });

        if (!todoExists) {
            return res
                .status(404)
                .send({ message: "ID do todo não encontrado" });
        }

        const todo: Todo = await prisma.todo.update({
            where: { id: Number(id) },
            data: { done },
        });
        res.status(200).json({ message: "Todo atualizado com sucesso", todo });
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ error: "Erro interno ao atualizar todo" });
    }
});

app.delete("/todos/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const todoExists: Todo = await prisma.todo.findUnique({
            where: { id: Number(id) },
        });

        if (!todoExists) {
            return res
                .status(404)
                .send({ message: "ID do todo não encontrado" });
        }

        const todo: Todo = await prisma.todo.delete({
            where: { id: Number(id) },
        });
        res.status(200).send({ message: "Todo deletado com sucesso", todo });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro interno ao deletar todo" });
    }
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});
