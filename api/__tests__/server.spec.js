const request = require('supertest')
const server = require('../server')
const db = require('../../config/db-config')

describe('integration testing', () => {
    describe('GET /', () => {
        test('should return 200 ok', async () => {
            const response = await request(server).get('/')
            expect(response.status).toBe(200)
        })
        test('should return JSON response ', async () => {
            const response = await request(server).get('/')
            expect(response.type).toMatch(/json/)
        })


    })

    describe('GET /api', () => {
        test('should return 404 status', async () => {
                const response = await request(server).get('/api')
                expect(response.status).toBe(404)
        })
        test('should return HTML response', async () => {
            const response = await request(server).get('/api')
                expect(response.type).toMatch(/html/)

        })
    })

    describe('GET /api/admin', () => {
        test('should return 200 ok', async () => {
            const response = await request(server).get('/api/admin')
            expect(response.status).toBe(200)
        })
        test('should return JSON response ', async () => {
            const response = await request(server).get('/api/admin')
            expect(response.type).toMatch(/json/)
        })


    })
    
})
//testing with async/await and es6 syntax
// describe('testing', () => {
// 	it('should return 200', async () => {
// 	const response = await request(server).get('/')

// 	expect(response.status).toBe(200)
// 	})
// })

//testing with es5 syntax using return
// describe('testing', function() {
// 	it('should return 200', function() {
// 		return request(server)
// 			.get('/')
// 			.expect(200)
// 	})
// })