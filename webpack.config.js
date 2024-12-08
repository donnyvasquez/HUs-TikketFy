const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', // Cambiar a 'production' para el build final
  entry: './src/index.js', // Archivo principal
  output: {
    filename: 'js/bundle.js', // JS generado
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Procesa SASS
        use: [
          MiniCssExtractPlugin.loader, // Extrae CSS a un archivo separado
          'css-loader',
          'sass-loader', // Compila SCSS a CSS
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main.css', // Archivo CSS generado
    }),
  ],
};
