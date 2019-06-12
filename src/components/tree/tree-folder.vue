<template>
    <ul class="">
        <li
            v-for="tree in treeList"
            :key="tree.id"
        >
            <h4>{{tree.title}}</h4>
            <TreeFolderContents :children="tree.children"></TreeFolderContents>
        </li>
    </ul>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            treeList: [
                {
                    id: 1,
                    title: '中华人民共和国',
                    children: [
                        {
                            id: 11,
                            title: '北京市',
                            childern: [
                                {
                                    id: 111,
                                    title: '北京市',
                                    childern: [
                                        {
                                            id: 1111,
                                            title: '东城区'
                                        },
                                        {
                                            id: 1112,
                                            title: '朝阳区'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 12,
                            title: '广东省',
                            childern: [
                                {
                                    id: 121,
                                    title: '广州市',
                                    childern: [
                                        {
                                            id: 1211,
                                            title: '越秀区'
                                        },
                                        {
                                            id: 1212,
                                            title: '黄埔区'
                                        }
                                    ]
                                },
                                {
                                    id: 122,
                                    title: '深圳市',
                                    childern: [
                                        {
                                            id: 1221,
                                            title: '福田区'
                                        },
                                        {
                                            id: 1222,
                                            title: '南山区'
                                        },
                                        {
                                            id: 1222,
                                            title: '宝安区'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    title: '美利坚联邦',
                    childern: [
                        {
                            id: 21,
                            title: '华盛顿州',
                            childern: [
                                {
                                    id: 211,
                                    title: 'aaaa'
                                }
                            ]
                        },
                        {
                            id: 22,
                            title: '纽约州',
                            childern: [
                                {
                                    id: 221,
                                    title: 'bbb'
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    },
    components: {
        TreeFolderContents: () => import('./tree-folder-contents.vue')
    }
};
</script>

<style scoped lang="stylus"></style>
