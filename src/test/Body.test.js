import React from 'react';
import './matchMedia';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Body from '../components/Body';
import Search from '../components/Search';
import Banner from '../components/Banner';
import Sliders from '../components/Sliders';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const films = [
    {id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
        title: 'Castle in the Sky'},
    {id: '12cfb892-aac0-4c5b-94af-521852e46d6a',
        title: 'Grave of the Fireflies'},
    {id: '58611129-2dbc-4a81-a72f-77ddfc1b1b49',
        title: 'My Neighbor Totoro'},
    {id: '90b72513-afd4-4570-84de-a56c312fdf81',
        title: 'The Cat Returns'},
    {id: 'cd3d059c-09f4-4ff3-8d63-bc765a5184fa',
        title: 'Howl\'s Moving Castle'},
]

test('render Body component', () => {
    const wrapper = shallow(<Body/>);
    expect(wrapper.exists()).toBe(true);
});

test('render Search', () => {
    const wrapper = shallow(<Search/>);
    expect(wrapper.exists()).toBe(true);
});

test('render Banner', () => {
    const wrapper = shallow(<Banner/>);
    expect(wrapper.exists()).toBe(true);
});

test('render Sliders', () => {
    const wrapper = shallow(<Sliders films={ films }/>);
    expect(wrapper.exists()).toBe(true);
});