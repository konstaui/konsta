let modules = process.env.MODULES || false;
if (modules === 'esm' || modules === 'false') modules = false;

export default {
  presets: [['@babel/preset-env', { modules, loose: true }]],
};
