
import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NavigationItems from './NavigationItems'

configure({adapter: new Adapter()})

describe('<NavigationItems />',() => {

    it('should display 1 menu item when not authenticated',() => {
        const wrapper = shallow(<NavigationItems />)
        // expectation 
        expect(wrapper.find('li')).toHaveLength(1)
    })

    it('should display 3 items when user is authenticated',() => {
        const wrapper = shallow(<NavigationItems isAuthenticated />)
        // expectation 
        expect(wrapper.find('li')).toHaveLength(3)
    })
})