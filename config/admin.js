module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5ba1427cbd648f32e1b9aa9d468a139c'),
  },
});
