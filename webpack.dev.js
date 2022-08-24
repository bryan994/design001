const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'images/[name].[ext]'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // 3. Inject styles to DOM
                    'css-loader', // 2. Turn css to js
                    'sass-loader' // 1. Turn sass to css
                ]
            },
        ],
    }
});