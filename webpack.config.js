// Generated using webpack-cli http://github.com/webpack-cli
const path = require('path');
var VirtualModulesPlugin = require('webpack-virtual-modules');
var AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

const entryPath = path.join(__dirname, 'src', 'virtualentrypoint');

var virtualModules = new VirtualModulesPlugin({
    [entryPath]: 'console.log("this should appear");',
});

const plugins = [virtualModules];
const useAngularCompiler = true;
if(useAngularCompiler) {
    plugins.push(new AngularCompilerPlugin({
        tsConfigPath: './tsconfig.json'
    }));
}

module.exports = {
    mode: 'development',
    target: 'node',
    entry: entryPath,
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        ...plugins
        // Add your plugins here
        // Learn more obout plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\\.(ts|tsx)$/,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
