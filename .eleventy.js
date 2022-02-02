module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("_src/css/");
    eleventyConfig.addPassthroughCopy("_src/music/");
    eleventyConfig.addPassthroughCopy("_src/img/");
    eleventyConfig.addPassthroughCopy("_src/js/");
    eleventyConfig.addPassthroughCopy("_src/.well-known/");
    
      return {
        dir: {
          input: '_src',
          output: '_site'
        }
      };
};
