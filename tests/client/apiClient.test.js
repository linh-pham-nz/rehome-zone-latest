import nock from 'nock'
import { getDbCats, getCatFacts } from '../../client/apiClient';

describe('client api', () => {
    test('getDbCats returns cats', () => {
        let fakeCats = [{name: 'Sampson'}, {name: 'Rocket'}]
        const scope = nock('http://localhost')
            .get('/api/v1/cats')
            .reply(200, fakeCats)

        return getDbCats()
            .then(request => {
                let cats = request.body
                expect(cats.length).toBe(2)
                expect(cats[0].name).toBe('Sampson')
            })
    })
})

describe('cat facts external api', () => {
    test('sends back cat fact', () => {
        const fakeFact = {fact: 'Cats are sometimes dogs'}
        const scope = nock('https://raw.githubusercontent.com')
            .get('/vadimdemedes/cat-facts/master/cat-facts.json')
            .reply(200, fakeFact)

        getCatFacts((fact) => {
            expect(fact).toBe(fakeFact.fact)
        })
    })
})