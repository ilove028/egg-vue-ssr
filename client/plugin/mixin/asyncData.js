export default {
  beforeMount () {
    const { asyncData } = this.$options;

    if (asyncData) {
      this.dataPromise = asyncData({
        store: this.$store
      });
    }
  },
  beforeRouteUpdate (to, from, next) {
    const { asyncData } = this.$options;

    if (asyncData) {
      asyncData({
        store: this.$store
      }).then(next).catch(next)
    } else {
      next()
    }
  }
}