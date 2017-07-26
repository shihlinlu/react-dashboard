const path = require('path')

const config = {
    entry: '/Users/shihlinlu/Desktop/Dev/sentry/code/sentry_git/sentrydb/sentrydb/src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query:
                    {
                        presets:['react']
                    },
                // use: ['style-loader','css-loader']
            },
            {
                test: /\.css$/,
                loaders: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader')
                ],

            }
        ]
    }
}

module.exports = config