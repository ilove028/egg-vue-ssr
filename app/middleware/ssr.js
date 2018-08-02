const path = require('path');
const Vue = require('vue');

module.exports = (options = {}) => {
  options = Object.assign({ template: path.join(__dirname, '../../template/index.template.html') }, options);
  const render = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync(options.template, 'utf-8')
  });
  return async function ssr(ctx, next) {
    try {
      ctx.body = await render.renderToString(new Vue({
        data: { url: ctx.req.url },
        template: '<div>访问的URL为{{url}}</div>'
      }), { title: '测试标题', meta: '<meta charset="utf-8">' });
    } catch (e) {
      await next();
    }
  };
};