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
  server.db = testDb // this makes sure express uses the testDb
  return testEnv.initialise(testDb)
})

// Destroy the database connection after each test.
afterEach(() => testEnv.cleanup(testDb))

// test route getDbCats
test('db works', () => {
    return testDb('cats').then(cats => expect(cats.length).toBe(3))
    //note that this is using the test/seeds folder
})



