const path = require("path");
const externals = require("webpack-node-externals");
module.exports = {
  entry: "./src/index.ts",
  target: "node",
  externals: [externals(), "pg-native"].filter(
    (e) => e !== "@jtmorrisbytes/lib"
  ),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
};
