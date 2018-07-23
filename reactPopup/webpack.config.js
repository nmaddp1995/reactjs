var config = {
    entry: './main.js',
    output: {
        path: '/',
        filename: 'index.js'
    },
    mode: "development",
    devServer: {
        inline: true,
        port: 8080
    },
    performance: { hints: false },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
}

module.exports = config