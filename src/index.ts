import * as express from 'express';
import { Request, Response, Application } from 'express';
import { database } from './lib/database';

const app: Application = express();
app.use(express.json());
const { PORT = 3000 } = process.env;

interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  created_at?: string;
  updated_at?: string;
}

interface Group {
  id?: number;
  name: string;
  description: string;
  location: string;
  maximalSize: number;
  created_at?: string;
  updated_at?: string;
}

//Hello World
app.get('/', async (req: Request, res: Response) => {
  res.json({
    message: 'hello world',
  });
});

//Index
app.get('/user', async (req: Request, res: Response) => {
  try {
    const users: Array<User> = await database('users').select();
    res.json(users);    
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get('/group', async (req: Request, res: Response) => {
  try {
    const groups: Array<Group> = await database('groups').select();
    res.json(groups);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

//Show
app.get('/user/:id', async (req: Request, res: Response) => {
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
});

app.get('/group/:id', async (req: Request, res: Response) => {
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
});

//Create
app.post('/user', async (req: Request, res: Response) => {
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
});

app.post('/group', async (req: Request, res: Response) => {
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
});

//Update
app.put('/user/:id', async (req: Request, res: Response) => {
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
});

app.put('/group/:id', async (req: Request, res: Response) => {
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
});

// Delete
app.delete('/user/:id', async (req: Request, res: Response) => {
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
});

app.delete('/group/:id', async (req: Request, res: Response) => {
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
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});