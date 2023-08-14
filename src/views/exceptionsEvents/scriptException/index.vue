<template>
  <div>
    <Table
      :tableDtate="tabletest"
      :options="options"
      :show="show"
      :total="total"
      :trigger="trigger"
      @change="change"
      @changePage="changePage"></Table>
  </div>
</template>

<script>
import Table from '../../common/table'
import { changeData, changePage } from '../../common/index'
import { scriptExceptionData } from '../data/data'
import { pageData } from '@/views/dimensions/data/data'
export default {
  components: {
    Table
  },
  data () {
    return {
      tabletest: scriptExceptionData,
      show: false,
      total: 0,
      trigger: "hover",
      changeData: scriptExceptionData,
      options: [
        {
          value: 'all',
          label: '全部'
        },
        {
          value: 'journal',
          label: '日志'
        },
        {
          value: 'warning',
          label: '警告'
        },
        {
          value: 'error',
          label: '错误'
        },
      ]
    }
  },
  methods: {
    change(e) {
      let newData = changeData(e, scriptExceptionData)
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
    const data = scriptExceptionData.length / 10
    this.total = scriptExceptionData.length
    if(data > 1) {
      this.show = true
      this.tabletest = scriptExceptionData.slice(0, 10)
     
    }
  }
}
</script>
