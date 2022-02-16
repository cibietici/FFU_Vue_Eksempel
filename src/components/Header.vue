<template>
    <h3>Header {{ title }}</h3>
    {{ list }}
</template>
<script>

export default {
    name: 'header',
    props: {
        title: {
            type: String,
            default: 'hello'
        },
        list: {
            type: Number,
            default: 1
        }
        
    }
    
}
</script>
<style scoped>

</style>
