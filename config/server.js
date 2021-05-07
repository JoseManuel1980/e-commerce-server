module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 8080),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "cb0df7d88dbbd607a0030aa9d2e51db2"),
    },
  },
});
