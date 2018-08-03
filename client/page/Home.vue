<template>
  <div>This is Home Page.</div>
</template>
<script>
export default {
  asyncData ({ store }) {
    return store.dispath()
  }
}
</script>

