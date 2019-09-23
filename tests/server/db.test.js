const config = require('../../knexfile').test
const connection = require('knex')(config)

const {postCatData, getCats, getChosenDbCat} = require('../../server/db')

beforeAll(() => {
    return connection.migrate.latest()
})

beforeEach(() => {
    return connection.seed.run()
})

test('postCatData', () => {
    expect.assertions(1)
    return postCatData({name: 'Kevin', breed: 'tabby'}, connection).then(() => {
        return connection('cats').select().then(cats => {
            expect(cats.length).toBe(4)
        })
    })
})

test('getCats', () => {
    expect.assertions(1)
    return getCats(connection).then(results => {
        expect(results.length).toBe(3)
    })
})

test('getChosenDbCat', () => {
    let id = 2
    return getChosenDbCat(id, connection).then(results => {
        expect(results.name).toBe('Tobermory')
    })
    
})
