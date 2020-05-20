<template>
    <div>
        <ul>
            <li v-for="item in data" :key="item.number">
                {{item.name}}, 电话号码 {{item.number}}
            </li>
        </ul>
    </div>
</template>

<script>
    import {deepClone} from "../utils";

    export default {
        name: "mailList",
        data() {
            return {
                contactList: [{
                    name: '张三',
                    number: '15342492101'
                }, {
                    name: '李四',
                    number: '17832321232'
                }, {
                    name: '王五',
                    number: '21293231'
                }],
                data: []
            }
        },
        props: {
            telephoneNumber: {
                type: String,
                default: ''
            },
        },
        watch: {
            telephoneNumber: 'filterContact'
        },
        mounted() {
            this.data = deepClone(this.contactList)
        },
        methods: {
            filterContact(v) {
                this.data = this.contactList.filter(val => {
                    if (val.number.indexOf(v) !== -1) {
                        return val
                    }
                })
            }
        }
    }
</script>
