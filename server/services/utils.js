const request = require('request-promise');


const baseUrl = 'https://api.themoviedb.org/3';

const options = {
  // uri: 'https://api.github.com/user/repos',
  qs: {
    api_key: '77e2840a279a6392d273bba8942b2f65',
  },
  headers: {
    'User-Agent': 'lmdb-server',
  },
  json: true,
};

async function getUrl (url, opts = {}) {
  url = `${baseUrl}${url}?api_key=77e2840a279a6392d273bba8942b2f65`;
  if (opts.appendQuery) {
    url = `${url}${url.includes('?') ? '&' : '?'}append_to_response=${opts.appendQuery}`;
  }
  if (opts.query) {
    url = `${url}${url.includes('?') ? '&' : '?'}${opts.query}`;
  }
  return await request(Object.assign({uri: url}, options))
}

module.exports = {
  getUrl,
}
