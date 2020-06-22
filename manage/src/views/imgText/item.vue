<template>
    <div>
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item  style="float:left">
                <el-button type="success" @click="dialogFormVisible = true">添加项目</el-button>
            </el-form-item>
        </el-form>

        <el-table
                v-loading="$store.state.isLoading"
                :border="true"
                :data="$store.state.imgText.itemForm"
                style="width: 100%">
            <el-table-column
                    label="项目名"
                    min-width="200"
            >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.xmm }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="项目介绍"
                    min-width="200"
            >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.xmjs }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="所在公司"
                    min-width="160"
            >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.szgs }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="开发环境"
                    min-width="160"
            >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.kfhj }}</span>
                </template>
                </el-table-column>
                   <el-table-column
                    label="职责描述"
                    min-width="160"
            >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.zcms }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" min-width="160">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="primary"
                            @click="open(scope.row._id)">修改</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="open(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>


        <pageList actionName="getworkForm"></pageList>
        <!-- <shop-type-daing :dialogFormVisible.sync="dialogFormVisible"></shop-type-daing> -->
        <workDaing v-if="dialogFormVisible " :info="info" :dialogFormVisible.sync="dialogFormVisible"></workDaing>
    </div>
</template>

<script>
    import workDaing from '@/components/itemDaing.vue'
    export default {
        name: '',
        data() {
            return {
                imgType:'',
                dialogFormVisible : false,
                info:{}
            }
        },
        components:{
            workDaing
        },
        computed:{
        },
        filters:{
        },
        watch:{
        },
        methods: {
            open(_id){
                this.$store.dispatch("deleteItem",_id);
            }
        },
        mounted() {
            this.$store.dispatch("getitemForm",{pageIndex:1,limit:8});
        },
    };
</script>

<style scoped lang="less">

</style>

