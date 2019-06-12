<template>
    <div>
        <h1
            v-for="item in items"
            :key="item"
        >
            {{item}}
            <solt></solt>
        </h1>
    </div>
</template>

<script>
export default {
    props: ['items'],
    data() {
        return {};
    }
};
</script>

<style scoped lang="stylus"></style>
