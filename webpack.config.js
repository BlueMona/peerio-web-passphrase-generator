const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {

    function ifProd(val) {
        return env.prod ? val : null;
    }

    function ifTest(val) {
        return env.test ? val : null;
    }

    function unlessTest(val) {
        return env.test ? null : val;
    }

    function getEnvName() {
        if (env.prod) return 'production';
        if (env.test) return 'test';
        return 'development';
    }

    return {
        entry: {
            app: './app.jsx',
            vendor: ['react', 'react-dom']
        },
        output: {
            filename: env.prod ? 'bundle.[name].[hash].min.js' : 'bundle.[name].js',
            path: path.resolve(__dirname, 'dist'),
            pathinfo: !env.prod
        },
        context: path.resolve(__dirname, 'src'),
        devtool: env.prod ? 'source-map' : 'eval',
        bail: env.prod,
        module: {
            loaders: [
                {test: /\.jsx?$/, loader: 'babel!eslint', exclude: /node_modules/},
                {test: /\.json$/, loader: 'json'},
                {test: /\.css$/, loader: 'style!css'},
                {test: /\.scss$/, loader: 'style!css!sass!import-glob'}
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html', // Load a custom template (ejs by default but can be changed)
                inject: 'body' // Inject all scripts into the body (this is the default so you can skip it)
            }),
            unlessTest(new webpack.optimize.CommonsChunkPlugin({name: 'vendor'})),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': `'${getEnvName()}'`
                }
            })
        ].filter(p => !!p)
    };
};
