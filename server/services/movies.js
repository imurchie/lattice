const { getUrl } = require('./utils');


const moviePrefix = '/movies';

module.exports = async function movieRoutes (fastify, opts) {
  fastify.register(async function (fastify, opts, done) {
    fastify.get('/popular', async function (request, reply) {
      // see https://developers.themoviedb.org/3/movies/get-popular-movies
      const results = await getUrl('/movie/popular');
      request.log.info(`Retrieved popular movies (page ${results.page} of ${results.total_pages})`);
      return results;
    });

    fastify.get('/:id', async function (request, reply) {
      // see https://developers.themoviedb.org/3/movies/get-movie-details
      const id = request.params.id;
      const results = await getUrl(`/movie/${id}`, {appendQuery: 'credits'});
      request.log.info(`Retrieved movie with id '${id}'`);
      return results;
    });

    fastify.get('/search/:searchValue', async function (request, reply) {
      // see https://developers.themoviedb.org/3/search/search-movies
      const searchValue = request.params.searchValue;
      const results = await getUrl(`/search/movie`, {query: `query=${searchValue}`});
      request.log.info(`Retrieved movies with query '${searchValue}' (${results.total_results} movies in ${results.total_pages} pages)`);
      return results;
    });
  }, { prefix: moviePrefix });
};
