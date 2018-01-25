const path = require('path');

  module.exports = {
    entry: './src/js/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist'
  	},
  	// watch: true,
  	module: {
  		rules: [
	  		{
	  			test: /\.scss$/,
	  			use: [
	  				'style-loader',
	  				'css-loader',
	  				'sass-loader'
	  			]
	  		}
  		]
  	}
	}