module.exports = ({ env }) => ({
  url: env("PUBLIC_URL", "https://iset-city-admin-production.up.railway.app"),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
// module.exports = ({ env }) => ({
//     url: env('MY_HEROKU_URL'),
//   });