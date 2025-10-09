import buildCopy from './build-copy.js';
import buildReact from './build-react.js';
import buildReactTypes from './build-react-types.js';
import buildVue from './build-vue.js';
import buildVueTypes from './build-vue-types.js';
import buildSvelte from './build-svelte.js';
import buildSvelteTypes from './build-svelte-types.js';
import buildShared from './build-shared.js';
import buildAngular from './build-angular.js';

(async () => {
  const env = process.env.NODE_ENV || 'development';
  const outputDir = env === 'development' ? 'build' : 'package';
  return Promise.all([
    buildCopy(),
    buildReact(outputDir),
    buildShared(outputDir),
    buildSvelte(outputDir),
    buildVue(outputDir),
    buildAngular(outputDir),
    buildReactTypes(),
    buildVueTypes(),
    buildSvelteTypes(),
  ]).catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    process.exit(1);
  });
})();
