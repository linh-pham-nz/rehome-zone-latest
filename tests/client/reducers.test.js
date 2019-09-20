import catFactReducer from '../../client/reducers/catFactReducer'
import { receiveFact } from '../../client/actions'

describe('catFactReducer', () => {
    test('initial state is nothing', () => {
        let state = catFactReducer(undefined, {type:'@@INIT'})
        expect(state).toBe('')
    })

    test('receiveCatFact returns random fact', () => {
        let state = catFactReducer('puppies are better', receiveFact('no, elephants are best'))
        expect(state).toBe('no, elephants are best')
    })
})
