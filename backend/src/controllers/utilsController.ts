import { Request, Response } from "express"

export class UtilsController {

    healthCheck = async (req: Request, res: Response): Promise<void> => {
        res.status(200).json({
            message: "OK",
            uptime: process.uptime(),
            time: Date.now()
        })
    }
}