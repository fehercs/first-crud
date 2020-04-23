import { Group } from '../models/group'
import { Request, Response } from 'express';
import { database } from '../../lib/database';

//Index
export const index = async (req: Request, res: Response) => {
  try {
    const groups: Array<Group> = await database('groups').select();
    res.json(groups);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

//Show
export const show = async (req: Request, res: Response) => {
  try {
    const group: Group = await database('groups').select().where({ id: req.params.id }).first();
    if (group) {
      res.json(group);      
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
    const group: Group = {
      name: req.body.name,
      description: req.body.description,
      location: req.body.location,
      maximalSize: parseInt(req.body.maximalSize)
    };
    await database('groups').insert(group);
    res.sendStatus(201);    
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

//Update
export const update = async (req: Request, res: Response) => {
  try {
    const group: Group = await database('groups').select().where({ id: req.params.id }).first();
    if (group) {
      const newGroup: Group = {
        name: req.body.name,
        description: req.body.description,
        location: req.body.location,
        maximalSize: parseInt(req.body.maximalSize)
      };
      await database('groups').update(newGroup).where({ id: req.params.id });
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
    const group: Group = await database('groups').select().where({ id: req.params.id }).first();
    if (group) {
      await database('groups').delete().where({ id: req.params.id });
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
};