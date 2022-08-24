const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/js/main.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.ejs",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.ejs$/,
                use: ['html-loader', 'template-ejs-loader'],

            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/i,
                type: 'asset/resource' // Webpack include asset module, nothing have to install
            }
        ],
    }
}