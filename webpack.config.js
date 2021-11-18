const path = require("path");

module.exports = [
  {
    target: "electron-renderer",
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/Main.ts",
    output: {
      filename: "./main.js",
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        {
          loader: "ts-loader",
          test: /\.tsx?$/,
          include: [path.resolve(__dirname, "src")],
          exclude: [path.resolve(__dirname, "src/electron")]
        },
      ],
    },
    resolve: {
        extensions: [".ts"]
    }
  },
];