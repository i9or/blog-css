const postcssImport = require("postcss-import");
const postcssPresetEnv = require("postcss-preset-env");
const autoprefixer = require("autoprefixer");
const cssNano = require("cssnano");

module.exports = {
	plugins: [
		postcssImport(),
		postcssPresetEnv(),
		autoprefixer(),
		cssNano({
			preset: "default"
		})
	]
}
