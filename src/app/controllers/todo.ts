import { Todo } from '../models/todo'
import { Request, Response } from 'express';
import { database } from '../../lib/database';

//Index
export const index = async (req: Request, res: Response) => {
  try {
    const todo: Array<Todo> = await database('todos').select();
    res.json(todo);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

//Show
export const show = async (req: Request, res: Response) => {
  try {
    const todo: Todo = await database('todos').select().where({ id: req.params.id }).first();
    if (todo) {
      res.json(todo);      
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

//Create
export const create = async (req: Request, res: Response) => {
  try {
    const todo: Todo = {
      name: req.body.name,
      description: req.body.description,
      status: req.body.status,
      userID: req.body.userID,
      categoryID: req.body.categoryID
    };
    await database('todos').insert(todo);
    res.sendStatus(201);    
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
//Update
//Destroy