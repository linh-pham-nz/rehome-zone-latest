import React from 'react'
import { shallow } from 'enzyme'

import Rehome from '../../client/components/Rehome'

const wrapper = shallow(<Rehome />)

describe('<Rehome />', () => {
    beforeEach(() => {
        wrapper.instance().setState({
            name: 'Johnson',
            breed: 'tabby',
            gender: 'male',
            age: '3',
            about: 'Enjoys company'})
    })
    test('form renders correct value for name', () => {
        let input = wrapper.find('#name')
        expect(input.prop('value')).toBe('Johnson')
    })
    test('form renders correct value for breed', () => {
        let input = wrapper.find('#breed')
        expect(input.prop('value')).toBe('tabby')
    })
    test('form renders correct value for gender', () => {
        let input = wrapper.find('#gender')
        expect(input.prop('value')).toBe('male')
    })
    test('state of about updates when content entered', () => {
        let input = wrapper.find('#about')
        input.simulate('onKeyPress', { target: {
            name: 'about',
            value: 'Enjoys company'
        }})
        let state = wrapper.instance().state
        expect(state.about).toBe('Enjoys company')
    })
})