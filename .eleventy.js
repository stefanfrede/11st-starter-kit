const { Liquid } = require('liquidjs');

const liquidOptions = {
  extname: '.liquid',
  strict_filters: true,
  root: ['_includes'],
};

const liquidEngine = new Liquid(liquidOptions);

const fs = require('fs');

module.exports = function (config) {
  config.setLibrary('liquid', liquidEngine);

  // Static assets to pass through
  config.addPassthroughCopy('./src/fonts');
  config.addPassthroughCopy('./src/images');
  config.addPassthroughCopy('./src/styles');
  config.addPassthroughCopy('./src/favicon.ico');
  config.addPassthroughCopy('./src/manifest.json');
  config.addPassthroughCopy('./src/robots.txt');

  config.addShortcode('hash', function () {
    const uint32 = self.crypto.getRandomValues(new Uint32Array(1))[0];
    return uint32.toString(16);
  });

  // 404
  config.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync('dist/404.html');

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  return {
    dir: {
      input: 'src',
      output: 'build',
    },
    passthroughFileCopy: true,
    templateFormats: ['html', 'md', 'liquid'],
    htmlTemplateEngine: 'liquid',
    dataTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
  };
};
