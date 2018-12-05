const path = require('path')

module.exports = {
    mode: 'development',
    watch: true,
    // Where webpack starts bundling.
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dest'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                // Both test and include have to be passed
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "src")
                ],

                // prefer include
                //exclude: [
                //    path.resolve(__dirname, "node_modules")
                //],

                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-react"]
                }
            }
        ]
    }
}