module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  url: env("PUBLIC_URL", "https://iset-city-admin-production.up.railway.app/"),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
