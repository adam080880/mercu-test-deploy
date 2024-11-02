import { Request, Response } from "express";
import db from "../config/db";

class UserController {
  getAll = async (req: Request, res: Response) => {
    const users = await db.table('users').select('*');

    res.json({
      status: true,
      data: users,
      message: 'Success'
    });
  };
};

export default UserController;
