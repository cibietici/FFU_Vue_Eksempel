<template>
    <h1>{{ title ? title : 'C1'}}</h1>
</template>
<script>
export default {
  name: 'C1',
  props: {
      title: {
          type: String,
          default: 'title'
      }
  }
}
</script>
