import { Category } from '../models/category'
import { Request, Response } from 'express';
import { database } from '../../lib/database';
import { QueryBuilder } from 'knex';

//Index
export const index = async (req: Request, res: Response) => {
  try {
    let query: QueryBuilder = database('categories').select();
    if (req.query.limit) {
      query = query.limit(req.query.limit);
    }
    if (req.query.offset) {
      query = query.offset(req.query.offset);
    }
    const categories: Array<Category> = await query;
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

//Show
export const show = async (req: Request, res: Response) => {
  try {
    const category: Category = await database('categories').select().where({ id: req.params.id }).first();
    if (category) {
      res.json(category);      
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
    const category: Category = {
      name: req.body.description,
      status: req.body.status
    };
    await database('categories').insert(category);
    res.sendStatus(201);    
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

//Update
export const update = async (req: Request, res: Response) => {
  try {
    const category: Category = await database('categories').select().where({ id: req.params.id }).first();
    if (category) {
      const newcategory: Category = {
        name: req.body.description,
        status: req.body.status
      };
      await database('categories').update(newcategory).where({ id: req.params.id });
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
    const category: Category = await database('categories').select().where({ id: req.params.id }).first();
    if (category) {
      await database('categories').delete().where({ id: req.params.id });
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
};