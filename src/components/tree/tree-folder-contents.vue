<template>

    <ul>
        <li
            v-for="child in children"
            :key="child.id"
        >
            <tree-folder
                v-if="child.children"
                :folder="child"
            />
            <h4 v-else> {{child.title}} </h4>
        </li>
    </ul>
</template>

<script>
export default {
    name: '',
    data() {
        return {};
    },
    props: ['children'],
    components: {
        TreeFolder: () => import('./tree-folder.vue')
    }
};
</script>

<style scoped lang="stylus"></style>
