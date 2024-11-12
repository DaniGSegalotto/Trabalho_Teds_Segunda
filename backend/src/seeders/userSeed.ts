import { appDataSource } from "../data-source";
import User from "../entities/user";
import { faker } from "@faker-js/faker"

export class UserSeed {
    public static async seed(): Promise<void> {
        if(!appDataSource.isInitialized) {
            await appDataSource.initialize()
        }

        const userRepo = appDataSource.getRepository(User)
        const insert = 100

        for( let i=0; i < insert; i++) {
            const user = userRepo.create({
                name: faker.person.fullName(),
                email: faker.internet.email(),
                password: i,
            })
        }
    }
}