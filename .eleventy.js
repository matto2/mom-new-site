module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("_src/css/");
    eleventyConfig.addPassthroughCopy("_src/music/");
    eleventyConfig.addPassthroughCopy("_src/img/");
    eleventyConfig.addPassthroughCopy("_src/js/");
    eleventyConfig.addPassthroughCopy("_src/pdfs/");
    eleventyConfig.addPassthroughCopy("_src/.well-known/");
    eleventyConfig.addPassthroughCopy("_src/android-chrome-192x192.png");
    eleventyConfig.addPassthroughCopy("_src/apple-touch-icon.png");
    eleventyConfig.addPassthroughCopy("_src/favicon-16x16.png");
    eleventyConfig.addPassthroughCopy("_src/favicon-32x32.png");
    eleventyConfig.addPassthroughCopy("_src/favicon.ico");
    eleventyConfig.addPassthroughCopy("_src/site.webmanifest");
    
      return {
        dir: {
          input: '_src',
          output: '_site'
        }
      };
};
