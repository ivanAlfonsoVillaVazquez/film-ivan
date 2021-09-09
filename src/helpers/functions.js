const axios = require('axios').default;
const api_address = 'https://api.themoviedb.org/3/';

/**
 * Add images url by film
 * @param  {[Array]} arg1 [Films array]
 * @return {[Array]}      [Films array with the images info]
*/
const addInfo = async (films) => {
    // eslint-disable-next-line no-undef
    let final_films = await Promise.all(
        films.map( async (film) => {
            let detail = await searchDetails(film.title);
            let result = { ...film }
            result['backdrop_path'] = detail.backdrop_path ? detail.backdrop_path : '';
            result['poster_path'] = detail.poster_path ? detail.poster_path : '';

            return result;
        })
    )
    return final_films;
}

/**
 * Get the url film images from moviedb Api
 * @param  {[string]} title [Film title]
 * @return {[Array]}      [Films array with the images info]
*/
const searchDetails = async (title) => {
    try {
        let config = {
            method: 'get',
            url: `${api_address}search/movie`,
            params: {
                'api_key': '760120381a4750770fee7e8047d6db4d',
                'query': title,
                'page': '1',
            },
            headers: {
                'Accept': 'application/json',
            },
        };
        const response = await axios(config);
        return response.data.results[0];
    } catch (error) {
        console.error(error)
    }
}

module.exports.addInfo = addInfo;