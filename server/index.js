'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')


const version = 'v1.0';

const fastify = require('fastify')({
  logger: true,
  ignoreTrailingSlash: true,
});

// automatically load the routes in 'services'
fastify.register(AutoLoad, {
  dir: path.join(__dirname, 'services'),
  options: { prefix: `/${version}` }
});

// add a redirect from the bare url to the prefixed root
fastify.get('/', async function (request, reply) {
  return reply.redirect(`/${version}`);
});

// start listening
fastify.listen(3001, function connected (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`LMDB Server ${version} listening on ${address}`)
});
