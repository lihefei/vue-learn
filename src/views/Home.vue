<template>
    <div class="home">
        <ComponentA />
        <Tree />
    </div>
</template>

<script>
import ComponentA from '@/components/ComponentA.vue';
import Tree from '@/components/tree/tree-folder.vue';

export default {
    name: 'home',
    components: {
        ComponentA,
        Tree
    }
};
</script>
