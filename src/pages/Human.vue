<template>
  <nem-page>
    <page-header :breadcrumb="['基础信息','人力信息']"/>
    <el-card>
      <advanc-search :data="searchData">
      <el-table :data="tableData">
      </el-table>
      <el-pagination :data="paginationData"/>
    </el-card>
  </nem-page>
</template>
<script>
export default {
  data() {
    return {
      searchData: {},
      tableData: {},
      paginationData: {},
    }
  },
  created() {
    this.$server.getHumanData();
  },
}
</script>
<style scoped>
.table{
  table-layout: fixed;
}
</style>
