import type { Request, Response } from "express";
import * as models from "../models/todoModel.js";

export const getTodos = async (req: Request, res: Response): Promise<void> => {
    res.json(await models.getTodos());
};

export const addTodo = async (req: Request, res: Response): Promise<void> => {
    const { text } = req.body;
    res.json(await models.addTodo(text));
};

export const toggleTodo = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    res.json(await models.toggleTodo(id));
}

export const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    await models.deleteTodo(id);
    res.sendStatus(204)
}