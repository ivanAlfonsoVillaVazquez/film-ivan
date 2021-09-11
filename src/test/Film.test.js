import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Film from '../components/Film';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const film = {
    id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
    title: 'Castle in the Sky',
    backdrop_path: 'img.jpg',
    poster_path: 'mpNd0rTVrp6vHJ9Je7wSa3zC8JS.jpg',
    release_date: '1993',
    original_title: 'Original',
    rt_score: '99',
    original_title_romanised: 'romainsed',
    description: 'description',
    director: 'director',
}

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
      pathname: "localhost:3000/example/path",
      state: {film: { film }}
    })
  }));

test('render Film component', () => {
    const wrapper = shallow(<Film/>);
    expect(wrapper.exists()).toBe(true);
});