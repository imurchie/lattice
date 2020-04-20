'use strict'


module.exports = async function rootRoutes (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  });
};
