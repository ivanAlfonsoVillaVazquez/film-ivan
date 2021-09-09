import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Banner from '../components/Banner';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('render Banner component', () => {
    const wrapper = shallow(<Banner/>);
    expect(wrapper.exists()).toBe(true);
});

test('validate Banner text', () => {
    // eslint-disable-next-line max-len
    const expectedTxt = 'Studio Ghibli, del legendario creador de anime Hayao Miyazaki, es reconocido por sus películas animadas fascinantes y de culto, como las que componen esta colección.';
    const wrapper = shallow(<Banner/>);
    const txt = wrapper.find('#banner_text').text();
    expect(txt).toBe(expectedTxt);
});