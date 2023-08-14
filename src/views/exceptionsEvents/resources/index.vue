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
import { resourcesData } from '../data/data'
export default {
  components: {
    Table
  },
  data () {
    return {
      tabletest: resourcesData,
      show: false,
      total: 0,
      changeData: resourcesData,
      options: [
        {
          value: 'all',
          label: '全部'
        },
        {
          value: 'download',
          label: ' 资源下载'
        },
        {
          value: 'cross-download',
          label: '资源跨域下载'
        },
        {
          value: 'error',
          label: '资源下载失败'
        },
      ]
    }
  },
  methods: {
    change(e) {
      let newData = changeData(e, resourcesData)
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
    const data = resourcesData.length / 10
    this.total = resourcesData.length
    if(data > 1) {
      this.show = true
      this.tabletest = resourcesData.slice(0, 10)
     
    }
  }


}
</script>
