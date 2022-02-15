<template>
    <h1>{{componentTitle}}</h1>
    <C1 v-if="compName === 'C1'" />
    <C2 v-if="compName === 'C2'" />
    <C3 v-if="compName === 'C3'" />
</template>
<script>
import C1 from './C1.vue';
import C2 from './C2.vue';
import C3 from './C3.vue';

export default {
    
    name: 'general',
    props: {
        compName: {
           type: String,
            default: 'C1' 
        } 
    },
    components: {
        C1,
        C2,
        C3
    }

}
</script>

