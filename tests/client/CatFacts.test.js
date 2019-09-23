import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


import CatFacts from '../../client/components/CatFacts'
CatFacts.prototype.componentDidMount = () => {}

Enzyme.configure({adapter: new Adapter()})

test('cat fact appears when button clicked', () => {
    const wrapper = shallow(<CatFacts />)
    let button = wrapper.find('button')
    let oldState = button.prop('fact')
    // console.log(oldState)
    button.simulate('click')
    button = wrapper.find('button')
    expect(button.prop(oldState).toBe(!oldState))
})