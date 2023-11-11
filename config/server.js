module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('SERVER_PORT', 1337),
  url: env('URL', undefined),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
