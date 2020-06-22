<template>
    <div>
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item  style="float:left">
                <el-button type="success" @click="dialogFormVisible = true">添加公司</el-button>
            </el-form-item>
        </el-form>

        <el-table
                v-loading="$store.state.isLoading"
                :border="true"
                :data="$store.state.imgText.workForm"
                style="width: 100%">
            <el-table-column
                    label="开始工作日期"
                    min-width="200"
            >
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date1 | datas}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="结束工作日期"
                    min-width="200"
            >
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date2 | datas}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="公司名"
                    min-width="160"
            >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.gsm }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="工作描述"
                    min-width="160"
            >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.ms }}</span>
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
    import workDaing from '@/components/workDaing.vue'
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
            datas(v){
                return v.substring(0,10);
            }
        },
        watch:{
        },
        methods: {
            open(_id){
                this.$store.dispatch("deleteWork",_id);
            }
        },
    };
</script>

<style scoped lang="less">

</style>
