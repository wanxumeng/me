<template>
    <div class="takeComment">
        <textarea name="textarea" ref="content" class="takeTextField" id="tijiaoText"></textarea>
        <div class="takeSbmComment">
            <input type="button" @click="addWeibo" class="inputs" value="" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "TakeComment",
        methods:{
            addWeibo(){
                if(this.$refs.content.value){
                    if(this.$refs.content.value.length<=20){
                        this.$store.dispatch('addliuyan',{
                            content:this.$refs.content.value
                        });
                        this.$refs.content.value = '';
                        this.$store.dispatch('getLiuyan',{pageIndex:1,limit:8})
                    }else{
                        this.$message('不希望你输入超过20个字符');
                    }
                    
                }else{
                    this.$message('内容不能为空');
                }
            }
        },
        mounted(){
           
        }
    }
</script>

<style scoped>

</style>