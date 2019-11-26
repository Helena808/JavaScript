const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
	//Тут описываем все настройки
	//Точки входа (где брать скрипты, ктрые ему надо будет преобразовать)
	entry: {
		page1: "./src/page1/js/index.js",
		page2: "./src/page2/js/index.js"
	},

	output: {
		//Куда складывать
		filename: "[name].js",
		path: path.resolve(__dirname, "dist")
	},

	module: {
		// Правила работы дополнительных плагинов
		rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins: ["@babel/plugin-transform-runtime"]
                        }
                    }
                ]
            },

            {
            	test: /\.s?[ac]ss$/,
            	use: [
            		MiniCssExtractPlugin.loader,
            		{
            			loader: "css-loader",
            			options: {
            				url: false,
            				sourceMap: true
            			}
            		},
            		{
            			loader: "sass-loader"
            		}
            	]
            }
        ]
	},
	// Папки
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	]
}