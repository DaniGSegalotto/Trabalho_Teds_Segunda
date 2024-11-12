import { UserSeed } from "./userSeed"

const seed = async () => {
    await UserSeed.seed()
} 

seed().then(() => {
    console.log("Seeds inseridas")
}).catch( (error) => {
    console.log("Erro ao inserir seeds: " + error)
})