import { Request, Response } from "express"
import { appDataSource } from "../data-source"
import PropertyRepository from "../repositories/propertyRepository"
import UserRepository from "../repositories/userRepository"

export class PropertyController {
    private propertyRepository: PropertyRepository

    constructor() {
        this.propertyRepository = new PropertyRepository(appDataSource)
    }

    create = async (req: Request, res: Response): Promise<void> => {
        const userRepository = new UserRepository(appDataSource)

        const name: String = req.body.name
        const price: number = +req.body.price
        const ownerId: number = +req.body.ownerId

        const owner = await userRepository.getById(ownerId)
        if (!owner) {
            res.status(404).json({ message: 'Owner not found' })
        }

        const newProperty = this.propertyRepository.create({
            name, price, owner
        })
        res.status(201).json(newProperty)
    }

    getAll = async (req: Request, res: Response): Promise<void> => {
        const users = await this.propertyRepository.getAll();
        res.status(200).json(users);
    }
}