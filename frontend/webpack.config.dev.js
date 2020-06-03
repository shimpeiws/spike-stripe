const path = require("path");
const webpack = require("webpack");

module.exports = (env) => {
  return {
    entry: "./src/Index.tsx",
    output: {
      filename: "./js/bundle.js"
    },

    devtool: "source-map",

    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [{ loader: "ts-loader" }]
        }
      ]
    },

    devServer: {
      open: true,
      contentBase: path.join(__dirname, "./dist"),
      watchContentBase: true,
      port: 3000,
      historyApiFallback: {
        rewrites: [{ from: /^\/$/, to: "" }]
      }
    },

    plugins: []
  };
};
