import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin"
import DotEnv from "dotenv-webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"
import TerserPlugin from "terser-webpack-plugin"

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    path: path.join(__dirname, "/dist/"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new DotEnv({
      path: path.join(__dirname, "/.env.development"),
      systemvars: true,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/dist/index.html"),
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
}
