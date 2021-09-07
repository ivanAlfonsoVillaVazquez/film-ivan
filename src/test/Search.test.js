import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import Search from '../components/Search';

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

test('render Search component', () => {
    const wrapper = shallow(<Search/>);
    expect(wrapper.exists()).toBe(true);
});

test('Search a film', () => {
    const wrapper = shallow(<Search films={ films }/>);
    const search = wrapper.find('#search');
    //Search The cat returns film successfully
    search.simulate('change', { target: { value: 'cat' } });
    const good_suggestion = wrapper.find('.suggestion').text();
    expect(good_suggestion).toBe('The Cat Returns');

    //Search dog film without suggestions
    search.simulate('change', { target: { value: 'dog' } });
    expect(wrapper.find('.suggestion')).toHaveLength(0);
})