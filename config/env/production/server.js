module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 1337),
  url: env("PUBLIC_URL", "https://iset-city-admin-production.up.railway.app/"),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
// module.exports = ({ env }) => ({
//     url: env('MY_HEROKU_URL'),
//   });