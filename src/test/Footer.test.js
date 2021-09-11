import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Footer from '../components/Footer';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<Footer/>);

test('render Footer ', () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
});
