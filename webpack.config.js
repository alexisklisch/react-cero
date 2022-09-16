const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        // Configurar preset: array
                        [
                            '@babel/preset-react',
                            {
                                // Importa React de forma optimizada sin escribirlo
                                runtime: 'automatic'
                            }
                        ]
                    ]
                }            
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/static/index.html'
        })
    ]
}