export default {
  namespaced: true,
  state: {
    news: {
      status: 'notLoad',
      data: []
    }
  },
  actions: {
    queryHomeNews ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() < 0.1) {
            commit('queryHomeNewsFailed');
            reject();
          } else {
            const data = [{
              title: 'News 1',
              content: 'Content 1'
            },
            {
              title: 'News 2',
              content: 'Content 2'
            },
            {
              title: 'News 3',
              content: 'Content 3'
            }];
            commit('queryHomeNewsSuccess', data);
            resolve(data);
          }
        }, 500);
      });
    }
  },
  mutations: {
    queryHomeNewsStart (state) {
      state.news.status = 'loading';
      state.news.data = [];
    },
    queryHomeNewsSuccess (state, data) {
      state.news.status = 'loadSuccess';
      state.news.data = data;
    },
    queryHomeNewsFailed (state) {
      state.news.status = 'loadFailed';
      state.news.data = [];
    }
  }
}