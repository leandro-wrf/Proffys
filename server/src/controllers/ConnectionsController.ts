import { Request, Response } from 'express';

import connection from '../database/connection';

class ConnectionsController {
  async index(request: Request, response: Response) {
    const totalConnections = await connection('connections')
      .count('* as total');

    const { total } = totalConnections[0];

    return response.json({ total });
  }

  async create(request: Request, response: Response) {
    const { user_id } = request.body;

    await connection("connections").insert({
      user_id
    });

    return response.status(201).send();
  }
}

export default new ConnectionsController();