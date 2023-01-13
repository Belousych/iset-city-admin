module.exports = ({ env }) => {
  console.log("ENV", { env });
  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 3001),
    url: env("MY_HEROKU_URL"),
    app: {
      keys: env.array("APP_KEYS"),
    },
  };
};
