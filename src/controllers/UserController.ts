// let's type it manually, because ESlint is not resolving req, res types
import { Request, Response } from 'express'
import User from '../schemas/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()

    return res.json(users)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    // using fullName() method
    // console.log(user.fullName())

    return res.json(user)
  }
}

export default new UserController()
