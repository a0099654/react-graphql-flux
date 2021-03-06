module.exports = {
    entry: "./public/js/app.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/, loader: "babel-loader", exclude: /node_modules/,
            query:
                {
                    presets: ['react', 'es2015']
                }
        }]
    }
}