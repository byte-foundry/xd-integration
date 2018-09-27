module.exports = {
    target: "node",
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: 'main.js',
        libraryTarget: "commonjs2"
    },
    devtool: "none",
    externals: {
        scenegraph: 'scenegraph'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    plugins: [
                        "transform-react-jsx"
                    ]
                }
            }
        ]
    }
};