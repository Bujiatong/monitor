<template>
  <div>
    <Table
      :tableDtate="tabletest"
      :options="options"
      :show="show"
      :total="total"
      @change="change"
      @changePage="changePage"></Table>
  </div>
</template>

<script>
import Table from '../../common/table'
import { changeData, changePage } from '../../common/index'
import { osData, options } from '../data/data'
export default {
  components: {
    Table
  },
  data () {
    return {
      tabletest: osData,
      show: false,
      total: 0,
      changeData: osData,
      options: options
    }
  },
  methods: {
    change(e) {
      let newData = changeData(e, osData)
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
    const data = osData.length / 10
    this.total = osData.length
    if(data > 1) {
      this.show = true
      this.tabletest = osData.slice(0, 10)
     
    }
  }
}
</script>


