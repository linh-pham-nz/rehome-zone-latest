/* global test beforeEach afterEach expect */
const request = require('supertest')

const server = require('../../server/server')
const testEnv = require('./test-environment')

const db = require('../../server/db')

let testDb = testEnv.getTestDb()

// Create a separate in-memory database before each test.
// In our tests, we can get at the database as `t.context.db`.
beforeEach(() => {
  testDb = testEnv.getTestDb()
  server.db = testDb // this makes ure express uses the testDb
  return testEnv.initialise(testDb)
})

// Destroy the database connection after each test.
afterEach(() => testEnv.cleanup(testDb))

// test route getDbCats
test('db works', () => {
    return testDb('cats').then(cats => expect(cats.length).toBe(3))
    //note that this is using the test/seeds folder
})

// describe('GET /api/v1/cats', () => {
//   test('returns cats from db', () => {
//     return request(server)
//       .get('/api/v1/cats')
//       .expect(200)
//       .then((res) => {
//         expect(res.body.length).toBe(3)
//       })
//       .catch(err => expect(err).toBeNull())
//   })
// })



// test route getCatByName

// test route postNewCat

