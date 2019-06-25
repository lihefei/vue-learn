<template>
    <div class="home">
        <Map/>
        <!-- <ComponentA/>
        <Tree/>-->
        <!-- <p>{{username}}xxxxxxxxxxxx</p> -->
    </div>
</template>

<script>
import Map from '@/components/map/map.vue';
import ComponentA from '@/components/ComponentA.vue';
import Tree from '@/components/tree/tree-folder.vue';

export default {
    name: 'home',
    components: {
        //ComponentA,
        //Tree,
        Map
    },
    computed: {
        username() {
            return this.$router.params;
        }
    }
};
</script>
<style>
.home {
    height: 100%;
}
</style>

