<template>
    <div class="">
        aaaaaaaaaaaaaaaaaaaaaaaa
    </div>
</template>

<script >
import AnchoredHeading from './AnchoredHeading.vue';
export default {
    name: '',
    data() {
        return {
            items: ['aaa', 'bbb', 'ccc', 'ddd', 'eee']
        };
    },
    render: function(h) {
        return (
            <AnchoredHeading level={items}>
                <span>Hello</span> world!
            </AnchoredHeading>
        );
    }
};
</script>

<style scoped>
</style>
