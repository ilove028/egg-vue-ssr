import Vue from 'vue';
import Vuex from 'vuex';
import home from './module/home';

Vue.use(Vuex);

export function createStore () {
  return new Vuex.Store({
    state: {},
    modules: { home }
  });
}