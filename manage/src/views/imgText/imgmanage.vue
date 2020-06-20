<template>
    <div>
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item style="float:right">
                <el-button type="primary" @click="$store.dispatch('getImgList',{keyWord:imgType})">查询</el-button>
            </el-form-item>
            <el-form-item style="float:right">
                <el-input v-model="imgType" placeholder="请输入搜索关键字"></el-input>
            </el-form-item>
            <el-form-item  style="float:left">
                <el-button type="success" @click="dialogFormVisible = true">添加图片</el-button>
            </el-form-item>
        </el-form>

        <el-table
                v-loading="$store.state.isLoading"
                :border="true"
                :data="$store.state.imgText.imgList"
                style="width: 100%">
            <el-table-column
                    label="添加日期"
                    min-width="200"
            >
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.addTime | date}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="查询关键字"
                    min-width="200"
            >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.imgType}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="图片"
                    min-width="150"
            >
                <template slot-scope="scope">
                    <img :src="'/api/'+scope.row.shopTypePic" alt="" srcset=""  height="50px">
                    <!-- <span style="margin-left: 10px">{{ scope.row.shopTypePic }}</span> -->
                </template>
            </el-table-column>
            <el-table-column
                    label="图片类别"
                    min-width="160"
            >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ $store.state.imgText.imgTypeNum[scope.row.imgType] }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="图片名"
                    min-width="160"
            >
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.shopTypePic }}</span>
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


        <pageList actionName="getImgList" :keyWord ='imgType'></pageList>
        <!-- <shop-type-daing :dialogFormVisible.sync="dialogFormVisible"></shop-type-daing> -->
        <shop-type-daing v-if="dialogFormVisible " :info="info" :dialogFormVisible.sync="dialogFormVisible"></shop-type-daing>
    </div>
</template>

<script>
    import shopTypeDaing from '@/components/shop/shopTypeDaing'
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
            shopTypeDaing
        },
        computed:{
        },
        watch:{
        },
        methods: {
        },
    };
</script>

<style scoped lang="less">

</style>