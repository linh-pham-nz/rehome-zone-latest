import React from 'react'
import Enzyme, {shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import './setup-env'

import App from '../../client/components/App'
App.prototype.componentDidMount = () => {}

Enzyme.configure({adapter: new Adapter()})

test('test runner is working', () => {
  expect(true).toBeTruthy()
})

test('<App> root has className of app', () => {
  const wrapper = shallow(<App />)
  // const root = wrapper.find('navBar')
  // expect(root.length).toBe(1)
  expect(wrapper.find('.navBar')).to.have.lengthOf(1)
})

test('page header includes REHOME ZONE', () => {
  const wrapper = render(<App />)
  const h1 = wrapper.find('h1')
  expect(h1.text()).toMatch('REHOME ZONE')
})

// test('renders an <li> for each fruit', () => {
//   const wrapper = mount(<App />)
//   wrapper.setState({ name: 'bar' })
//   // wrapper.setState({fruits: ['orange', 'persimmons', 'kiwi fruit']})
//   // console.log(fruits)
//   expect(wrapper.find('li').length).toBe(3)
// })
