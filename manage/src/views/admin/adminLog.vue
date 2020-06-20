<template>
    <div><el-table
            v-loading="$store.state.isLoading"
            :border="true"
            :data="$store.state.admin.adminLog"
            style="width: 100%">
        <el-table-column
                label="日志日期"
                min-width="200"
        >
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.addTime | date}}</span>
            </template>
        </el-table-column>
        <el-table-column
                label="管理员名称"
                min-width="150"
        >
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.adminName }}</span>
            </template>
        </el-table-column>
        <el-table-column
                label="日志说明"
                min-width="160"
        >
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.detail }}</span>
            </template>
        </el-table-column>
        <el-table-column
                label="日志类别"
                min-width="160"
        >
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{$store.state.admin.adminTypeNum[scope.row.logType] }}</span>
            </template>
        </el-table-column>
        <el-table-column label="操作" min-width="160">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        type="danger"
                        @click="open(scope.row._id)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
        <pageList actionName="getAdminLog"></pageList>
    </div>
</template>
<script>
    export default {
        name: 'AdminLog',
        data() {
            return {
            };
        },
        computed:{
        },
        watch:{
        },
        methods: {
            open(id) {
                this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$store.dispatch('deleteAdminLog',id)
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        },
    };
</script>

<style scoped>

</style>