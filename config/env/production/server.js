module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env("PUBLIC_URL"),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
// module.exports = ({ env }) => ({
//     url: env('MY_HEROKU_URL'),
//   });