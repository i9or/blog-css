const postcssImport = require("postcss-import");
const postcssPresetEnv = require("postcss-preset-env");
const autoprefixer = require("autoprefixer");
const postcssCustomMedia = require("postcss-custom-media");
const cssNano = require("cssnano");
const postcssMixins = require("postcss-mixins");

module.exports = {
  plugins: [
    postcssMixins(),
    postcssImport(),
    postcssPresetEnv(),
    autoprefixer(),
    cssNano({ preset: "default" }),
    postcssCustomMedia(),
  ],
};
