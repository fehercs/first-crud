import { NextFunction, Request, Response } from "express";
import { User } from "../app/models/user";
import { database } from './database';
import * as jwt from "jsonwebtoken";
import * as jwtConfig from '../../config/jwt.json'

export const authentication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const info = jwt.verify(token, jwtConfig.secret);
    const userID: number = info.userID;
    const user: User = await database('users').where({ id: userID }).first();
    res.locals.user = user;
    next();    
  } catch (error) {
    res.sendStatus(401);
  }
}
