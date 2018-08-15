const path = require('path');
const merge = require('lodash.merge');

// preact webpack 配置
module.exports = function (config, env, helpers) {

    // alias
    config.resolve.alias = merge(config.resolve.alias, {
        '#': path.join(__dirname, './src/lib'),
        '@': path.join(__dirname, './src'),
    });

    // HtmlWebpackPlugin
    config.plugins[5] = merge(config.plugins[5], {
        options: {
            title: 'myapp',
            config: {
                template: 'src/temp.html',
            },
        }
    });

    return config;
}


