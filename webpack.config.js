const path = require("path");
const resolve = dir => {
  return path.join(__dirname, dir);
};
module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      '@': resolve('src') // 这样配置后 @ 可以指向 src 目录
    }
  },
  output: {
    libraryTarget: "var", //导出类型为对象 global全局变量
    libraryExport: "default", //默认导出点
    library: "ToolHelp", //生成对象，并配置对象名称 MyLibrary.default()--导出的类 ToolHelp
    //auxiliaryComment: "个人工具",//对var无效
    filename: "toolhelp.js",//toolhelp
    path: path.resolve(__dirname, "dist"),
    //chunkFilename: '[name]chunk.js', ts-loader 暂时不知道怎么配置 会导致无法分割代码
  }
};
