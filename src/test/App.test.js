import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from '../components/App';
import Navbar from '../components/Navbar';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('render App component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.exists()).toBe(true);
});

test('render Navbar', () => {
    const wrapper = shallow(<Navbar/>);
    expect(wrapper.exists()).toBe(true);
});