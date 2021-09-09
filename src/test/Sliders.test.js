import React from 'react';
import './matchMedia';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Sliders from '../components/Sliders';

const films = [
    {id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
        title: 'Castle in the Sky',
        backdrop_path: "123.jpg"},
    {id: '12cfb892-aac0-4c5b-94af-521852e46d6a',
        title: 'Grave of the Fireflies',
        backdrop_path: "123.jpg"},
    {id: '58611129-2dbc-4a81-a72f-77ddfc1b1b49',
        title: 'My Neighbor Totoro',
        backdrop_path: "123.jpg"},
    {id: '90b72513-afd4-4570-84de-a56c312fdf81',
        title: 'The Cat Returns',
        backdrop_path: "123.jpg"},
    {id: 'cd3d059c-09f4-4ff3-8d63-bc765a5184fa',
        title: 'Howl\'s Moving Castle',
        backdrop_path: "123.jpg"},
]

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('render Slider component', () => {
    const wrapper = shallow(<Sliders films={ films }/>);
    expect(wrapper.exists()).toBe(true);
});

test('Imges in slider', () => {
    const wrapper = shallow(<Sliders films={ films }/>);
    expect(wrapper.find('img')).toHaveLength(5);
});