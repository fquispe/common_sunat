require("dotenv").config({ path: `.env` });
module.exports = {
  host: "0.0.0.0",
  port: 3000,
  databases: {
    mongo: {
      user: process.env.MONGO_USER,
      password: process.env.MONGO_PASSWORD,
      shards: process.env.MONGO_SHARDS,
      database: process.env.MONGO_DATABASE,
    },
  },
  endpoints:{
    sunat: process.env.SUNAT_URL
  },
  secrets: {
    token: process.env.TOKEN
  }
};
