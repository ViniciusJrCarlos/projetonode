import {Request, Response} from 'express'

export class LeadController {

    public async Create(req: Request, res: Response) {

        const {name, email, phone} = req.body;

        return res.json({ name, email, phone, date: new Date()})

    }

}