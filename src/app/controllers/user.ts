import { User } from '../models/user'
import { Request, Response } from 'express';
import { database } from '../../lib/database';


//Index
export const index = async (req: Request, res: Response) => {
  try {
    const users: Array<User> = await database('users').select();
    res.json(users);    
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

//Show
export const show = async (req: Request, res: Response) => {
  try {
    const user: User = await database('users').select().where({ id: req.params.id }).first();
    if (user) {
      res.json(user);      
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
    const user: User = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      age: parseInt(req.body.age)
    };
    await database('users').insert(user);
    res.sendStatus(201);    
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

//Update
export const update = async (req: Request, res: Response) => {
  try {
    const user: User = await database('users').select().where({ id: req.params.id }).first();
    if (user) {
      const newUser: User = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        age: parseInt(req.body.age)
      };
      await database('users').update(newUser).where({ id: req.params.id });
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
    const user: User = await database('users').select().where({ id: req.params.id }).first();
    if (user) {
      await database('users').delete().where({ id: req.params.id });
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
};