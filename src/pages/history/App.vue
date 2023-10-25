<template>
  <div class="history">
    <h1>算法！</h1>
    <el-table
        :data="tableData"
        :default-sort="{ prop: ['date'], order: 'descending' }"
        style="width: 100%"
    >
      <el-table-column type="index" label="ID"/>
      <el-table-column prop="dateTime" label="XXXX" sortable="sortable" />
      <el-table-column prop="modelName" label="XXXX" sortable="sortable" />
      <el-table-column prop="datasetName" label="XXXX" sortable="sortable" />
      <el-table-column prop="algoName" label="XXXX" sortable="sortable"  />
      <el-table-column align="right" min-width="90">
        <template #header>
          <el-input v-model="search" @input="getTableData" size="default" placeholder="搜索XXXX" />
        </template>
        <template #default="scope">
          <el-button size="default" @click="getRecordDetail(scope.$index, scope.row)">
            XXXX
          </el-button>
          <el-button size="default" @click="handleRename(scope.$index, scope.row)">
            XXXX
          </el-button>
          <el-button size="default" type="primary" @click="handleDownload(scope.$index, scope.row)">
            下载
          </el-button>
          <el-popconfirm
              confirm-button-text="Yes"
              cancel-button-text="No"
              :icon="InfoFilled"
              icon-color="#626AEF"
              title="确认删除该检测记录吗？"
              @confirm="handleDelete(scope.$index, scope.row)"
          >
            <template #reference>
              <el-button type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script setup lang="ts">
import {handleError, onMounted, ref} from "vue";
import request from '@/api/index'
import store from '@/store'
import {router} from "@/router";

const tableData=ref()
const search=ref("")
function getTableData(){
  request.post('/model/findAll',{
    username: store.state.username,
  })
      .then((response)=>{
        console.log(response)
        let originData=response.data.data.modelInfos
        console.log(originData)

        tableData.value=originData.filter(
            (data) => {
              // console.log(data.datasetName.toLowerCase(), search.value)
              return (!search.value.length) || data.datasetName.toLowerCase().includes(search.value.toString().toLowerCase())
            }
        )
        store.commit('setHistoryRecords', tableData.value)
        console.log("tableData", tableData.value)
      })
      .catch((error)=>{
        console.error(error)
      })
}

getTableData()
// console.log("tableData", tableData.value)

function handleDelete(index:any,recordData:any){
  request.post('/model/delete',{
    modelName: recordData.modelName,
    username: store.state.username
  })
      .then((response)=>{
        console.log("handleDelete", response)
        tableData.value.splice(index, 1)
      })
      .catch((error)=>{
        console.log("handleDelete", error)
      })
}

function getRecordDetail(index:any, recordData:any) {
  store.commit('modifyShowHistoryRecordName', recordData.modelName)
  store.commit('modifyShowHistoryDatasetId', tableData.value[index].datasetId)
  store.commit('modifyshowHistory3DModelPath', tableData.value[index].modelPath)

  router.push('twodresult')
}
</script>

<style scoped>
.history {
  padding: 20pt;
  margin: 0;
  /*height: 100%;*/
}
</style>