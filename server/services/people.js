const { getUrl } = require('./utils');


const peoplePrefix = '/people';

module.exports = async function movieRoutes (fastify, opts) {
  fastify.register(async function (fastify, opts, done) {
    fastify.get('/:id', async function (request, reply) {
      // see https://developers.themoviedb.org/3/people/get-person-details
      const id = request.params.id;
      const results = await getUrl(`/person/${id}`, {appendQuery: 'movie_credits'});
      request.log.info(`Retrieved person with id '${id}'`);
      return results;
    });
  }, { prefix: peoplePrefix });
};
