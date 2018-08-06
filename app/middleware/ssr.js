const path = require('path');
const fs = require('fs');

module.exports = (options = {}) => {
  options = Object.assign({ template: path.join(__dirname, '../../template/index.template.html') }, options);
  // const render = require('vue-server-renderer').createRenderer({
  //   template: require('fs').readFileSync(options.template, 'utf-8')
  // });
  const template = fs.readFileSync(options.template, 'utf-8');
  const serverBundle = require('../public/vue-ssr-server-bundle.json');
  const clientManifest = require('../public/vue-ssr-client-manifest.json');
  const render = require('vue-server-renderer').createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template,
    clientManifest
  });
  return async function ssr(ctx, next) {
    try {
      ctx.body = await render.renderToString(Object.assign(ctx, { title: '测试标题', meta: '<meta charset="utf-8">' }));
    } catch (e) {
      await next();
    }
  };
};