module.exports = (config) => {
  config.addPassthroughCopy('./src/css');
  config.addPassthroughCopy('./src/_redirects');

  config.addCollection('videos', (collection) => collection.getFilteredByGlob('./src/videos/*.md'));

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
