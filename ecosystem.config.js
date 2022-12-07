module.exports = {
  apps: [
    {
      name: "paz-kids-node",
      script: "./server.js",
      env_production: {
        MYSQL_HOST: process.env.MYSQL_HOST || "",
        MYSQL_DATABASE: process.env.MYSQL_DATABASE || "",
        MYSQL_USER: process.env.MYSQL_USER || "",
        MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || "",
        MYSQL_PORT: process.env.MYSQL_PORT || "",
      },
    },
  ],
};
