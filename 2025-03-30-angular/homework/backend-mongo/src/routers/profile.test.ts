import request from "supertest"
import { server, start } from "../app"
import { sign } from "jsonwebtoken"
import config from "config"

describe("Profile router tests", () => {
    describe("/ endpoint test", () => {
        // test all the exceptions before...
        test("it should return 401 if no authorization header", async () => {
            await start()
            const result = await request(server).get('/profile')
            
            expect(result.statusCode).toBe(401)
        })
        test("it should return an array of posts", async () => {
            await start()

            const jwt = sign({id: "1230ae30-dc4f-4752-bd84-092956f5c633"}, config.get<string>('app.jwtSecret'))
            const result = await request(server)
                .get('/profile')
                .set({'Authorization': `Bearer ${jwt}`})
            
            expect(result.statusCode).toBe(200)
            expect(Array.isArray(result.body)).toBeTruthy()
            expect(result.body[0]).toHaveProperty('id')
            expect(result.body[0]).toHaveProperty('userId')
            expect(result.body[0]).toHaveProperty('title')
            expect(result.body[0]).toHaveProperty('body')
            expect(result.body[0]).toHaveProperty('imageUrl')
        })
    })
})