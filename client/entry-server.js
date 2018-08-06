import { createApp } from './app';

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp(context);
    // 设置服务器端 router 的位置
    router.push(context.url);
    // 等到 router 将可能的异步组件和钩子函数解析完
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();

      if (!matchedComponents.length) {
        reject({ code: 404, message: 'Page Not Found' });
      } else {
        resolve(app);
      }
    }, () => {
      reject({ code: 500, message: 'System Error' });
    });
  });
}