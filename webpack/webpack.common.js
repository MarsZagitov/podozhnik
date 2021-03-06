const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const babelLoader = {
    loader: "babel-loader",
    options: {
        presets: ["@babel/preset-env", [
            "@babel/preset-react",
            {
                "runtime": "automatic"
            }
        ],
            "@babel/preset-typescript"
        ],
    }
}

module.exports = {
    entry: path.resolve(__dirname, "..", "./src/index.tsx"),
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.m?jsx?$/i,
                exclude: /node_modules/,
                use: babelLoader
            },
            {
                test: /\.(ts)x?$/,
                exclude: /node_modules/,
                use: [
                    babelLoader, "ts-loader"
                ]
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: { importLoaders: 1 }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
                type: 'asset/inline',
            },

        ]
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './src/index.html'),
        }),
    ],
}

