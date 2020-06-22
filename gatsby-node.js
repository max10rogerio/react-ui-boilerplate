// This project don"t use gastby, this config is used for generate docs using docz package.
const path = require("path");

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      // ⚠ Note the ".." in the path because the docz gatsby project lives in the `.docz` directory
      modules: [path.resolve(__dirname, "../src"), "node_modules"],
    },
  })
}