<template>
    <div class="commentOn">
        <div class="noContent" v-show="$store.state.contentList.length<1">暂无留言</div>
        <div class="messList" v-for="item in $store.state.contentList" :key="item._id">
            <div class="reply">
                <p class="replyContent">{{item.content}}</p>
                <p class="operation">
                    <span class="replyTime">{{item.addTime | date}}</span>
                </p>
            </div>
        </div>
        <PageList :pageSum="$store.state.pageSum" :pageIndex="$store.state.pageIndex"></PageList>
    </div>
</template>

<script>
    import PageList from "./PageList";
    export default {
        name: "CommentOn",
        data(){
            return {
               
            }
        },
        components:{
            PageList
        },
        methods:{
            
        },
        mounted(){
            this.$store.dispatch('getLiuyan',{pageIndex:1,limit:8})
        }
    }
</script>

<style scoped>

</style>