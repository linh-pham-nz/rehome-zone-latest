import React from 'react'
import Enzyme, {shallow} from 'enzyme'

import CatFacts from '../../client/components/CatFacts'

jest.mock('react-redux', () => {
    return {
      connect: () => {
        return (component) => component
      }
    }
})

describe('<CatFacts />', () => {
    test('clicking button calls fetchFact', () => {
        let dispatch = jest.fn()
        const wrapper = shallow(<CatFacts dispatch={dispatch} state={{catFactReducer: 'cats are soft'}}/>)
        let button = wrapper.find('button')
        button.simulate('click')
        expect(dispatch).toHaveBeenCalled()
    })
})

