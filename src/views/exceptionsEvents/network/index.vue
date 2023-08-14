<template>
  <div>
    <Table
      :tableDtate="tabletest"
      :options="options"
      :show="show"
      :total="total"
      @change="change"
      @changePage="changePage">
    </Table>
  </div>
</template>

<script>
import Table from '../../common/table'
import { changeData, changePage } from '../../common/index'
import { networkData } from '../data/data'
export default {
  components: {
    Table,
  },
  data () {
    return {
      tabletest: networkData,
      show: false,
      total: 0,
      changeData: networkData,
      options: [
        {
          value: 'all',
          label: '全部'
        },
        {
          value: 'request',
          label: '网络请求'
        },
        {
          value: 'cross-request',
          label: '网络请求跨域'
        },
        {
          value: 'error',
          label: '网络请求失败'
        },
      ]

    }
  },
  methods: {
    change(e) {
      let newData = changeData(e, networkData)
      const data = newData.length / 10
      this.total = newData.length
      if(data > 1) {
        this.show = true
        this.tabletest = newData.slice(0, 10)
        this.changeData = newData
      } else {
        this.tabletest = newData
        this.changeData = newData
      }
      
    },
    changePage(e) {
      this.tabletest = changePage(e, this.changeData)
    }

  },
    mounted() {
    const data = networkData.length / 10
    this.total = networkData.length
    if(data > 1) {
      this.show = true
      this.tabletest = networkData.slice(0, 10)
     
    }
  }

}
</script>


