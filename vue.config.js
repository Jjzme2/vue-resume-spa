// bf76eec7-989d-42e6-855a-9b0d65b5c5aa
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  //   publicPath: process.env.NODE_ENV === "production" ? "/vue-resume-spa/" : "/",
  publicPath: "/", // This is the default value
});
