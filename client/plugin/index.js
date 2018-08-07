import asyncData from './mixin/asyncData';

export default {
  install (Vue) {
    Vue.mixin(asyncData);
  }
}