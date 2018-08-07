import { createApp } from './app';

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp(context);
    // 设置服务器端 router 的位置
    router.push(context.url);
    // 等到 router 将可能的异步组件和钩子函数解析完
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();

      if (!matchedComponents.length) {
        reject({ code: 404, message: 'Page Not Found' });
      } else {
        // resolve(app);
        Promise.all(matchedComponents.map(component => {
          if (component.asyncData) {
            return component.asyncData({
              store
            });
          }
        })).then(() => {
          context.state = store.state;
          resolve(app);
        }).catch(() => {
          reject({ code: 500, message: 'System Error.' });
        });
      }
    }, () => {
      reject({ code: 500, message: 'System Error' });
    });
  });
}