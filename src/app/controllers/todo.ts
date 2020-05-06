import { Todo } from '../models/todo'
import { Request, Response } from 'express';
import { database } from '../../lib/database';
import { QueryBuilder } from 'knex';

//Index
export const index = async (req: Request, res: Response) => {
  try {
    let query: QueryBuilder = database('todos').select();
    if (req.query.limit) {
      query = query.limit(req.query.limit);
    }
    if (req.query.offset) {
      query = query.offset(req.query.offset);
    }
    const todos: Array<Todo> = await query;
    res.json(todos);
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
export const update = async (req: Request, res: Response) => {
  try {
    const todo: Todo = await database('todos').select().where({ id: req.params.id }).first();
    if (todo) {
      const newcategory: Todo = {
        name: req.body.description,
        status: req.body.status
      };
      await database('todos').update(newcategory).where({ id: req.params.id });
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

//Destroy
export const destroy = async (req: Request, res: Response) => {
  try {
    const todo: Todo = await database('todos').select().where({ id: req.params.id }).first();
    if (todo) {
      await database('todos').delete().where({ id: req.params.id });
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
};