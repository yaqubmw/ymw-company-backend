module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dcad3ad3801b740a43d053a6bbac21e4'),
  },
});
