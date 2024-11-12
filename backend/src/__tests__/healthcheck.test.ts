import jest from "jest"
import request from "supertest"
import app from "../app"
import { appDataSource } from "../data-source"


describe('Healthcheck test', () => {
    describe('Deve testar o HealthCheck da API', () =>{
        it('Deve retornar status code 200', async () => {
            const response = await request(app).get('/api/healthcheck')
            expect(response.statusCode).toBe(200)
        })
    
        it('Deve retornar uma mensagem', async () => {
            const response = await request(app).get('/api/healthcheck')
            expect(response.body).toHaveProperty('uptime')
            expect(response.body).toHaveProperty('message', 'OK')
            expect(response.body).toHaveProperty('time')
    
            expect(response.body.uptime).toBeGreaterThan(0)
            let currentTime = Date.now()
            expect(response.body.time).toBeLessThanOrEqual(currentTime) 
        })
    })
    
    describe('Deve conectar com o banco', () => {
        beforeAll( async () => {
            try {
                await appDataSource.initialize()
            } catch (error) {
                console.log('Erro durante a inicialização do banco de dados: ' + error)
            }
        })
    
        afterAll( async () => {
            await appDataSource.destroy()
        })
    
        it('Deve inicializar o banco', async () => {
            expect(appDataSource.isInitialized).toBe(true)
        })
    })
})
