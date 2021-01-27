const { PurgeCSS } = require('purgecss');
const fs = require('fs');

const build = async () => {
  const purgeCSSResults = await new PurgeCSS().purge({
    content: ['./build/index.html', './build/static/js/*.js'],
    css: ['./build/static/css/*.css'],
  });
  purgeCSSResults.forEach((res) => {
    fs.writeFileSync(res.file, res.css);
  });
};

build();
