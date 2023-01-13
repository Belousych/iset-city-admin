module.exports = ({ env }) => ({
  url: env('ADMIN_URL', '/admin'),
  apiToken: {
    salt: env('API_TOKEN_SALT', 'd9b0df66ff97a666027e665707b4e3e7'),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5ba1427cbd648f32e1b9aa9d468a139c'),
  },
});
