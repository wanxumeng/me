<template>
  <div>
      <div style="background:#f4f4f4;padding:10px;margin:0 0 20px 0">
          <el-pagination
            background
            layout="prev, pager, next"
            @current-change="sum=>$store.dispatch(actionName,{pageIndex:sum,limit:8,keyWord})"
            :page-count="$store.state.pageSum"
            :current-page="$store.state.pageIndex"
            >
          </el-pagination>
      </div>
  </div>
</template>

<script>
export default {
  name: 'pagelist',
  data() {
    return {
    };
  },
  props:{
      actionName:{
          type:String,
          default:"getAdminLog"
      },
      keyWord:{
        typr:Object,
        default(){
          return {}
        }
      }
  },
  computed:{
  },
  watch:{
  },
  methods: {},
  mounted() {
      this.$store.dispatch(this.actionName,{pageIndex:1,limit:8})
  },
};
</script>

<style scoped>

</style>
