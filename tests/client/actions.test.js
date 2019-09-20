import nock from 'nock'

import * as actions from '../../client/actions'

// Testing thunk
test('fetchFact', () => {
    const scope = nock('https://raw.githubusercontent.com')
        .get('/vadimdemedes/cat-facts/master/cat-facts.json')
        .reply(200, [{data: 'yay, puppies'}])
    
    const dispatch = jest.fn()

    return actions.fetchFact('puppies')(dispatch)
        .then(() => {
            expect(dispatch.mock.calls.length).toBe(1)
            expect(dispatch.mock.calls[0][0].type).toBe('SHOW_CAT_FACT')
            scope.done()
        })

})

// Testing other actions
test('showError displays errorMessage', () => {
    let action = actions.showError('this is an error message')
    expect(action.type).toBe('SHOW_ERROR')
    expect(action.errorMessage).toBe('this is an error message')
})

test('receiveFact displays random cat fact', () => {
    let action = actions.receiveFact('cats are number one')
    expect(action.type).toBe('SHOW_CAT_FACT')
    expect(action.randomFact).toBe('cats are number one')
})
