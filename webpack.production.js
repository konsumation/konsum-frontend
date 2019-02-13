const merge = require("webpack-merge");
const common = require("./webpack.config.js");

module.exports = merge(common, {
  mode: "production",
  externals: {
    config: JSON.stringify({
      apiUrl: "/services/konsum/api",
      baseUrl: "/services/konsum"
    })
  }
});
