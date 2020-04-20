## Some sense of why I made some of the choices I did

### Code

There are lots of alternatives in the JS world.

- front-end technology: React. As dictated
  - bootstrapped the React code with [Create React App](https://create-react-app.dev/)
    though adjusted file structure to fit better into also having the Node.js
    server in the same repo.
- web server: [fastify](https://www.fastify.io/), mostly because I've been wanting to
  try it out, as an alternative to [express](https://expressjs.com/), which is
  a little long in the tooth. Fastify has an acceptable license ([MIT](https://opensource.org/licenses/MIT))
  and active development but not ridiculous updates to have to manage.
