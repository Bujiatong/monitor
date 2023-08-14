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
import { pageData, options } from '../data/data'
export default {
  components: {
    Table
  },
  data () {
    return {
      tabletest: pageData,
      changeData:pageData,
      show: false,
      total: 0,
      options: options
    }
  },
  methods: {
    change(e) {
      let newData = changeData(e, pageData)
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
      console.log(newData.length, data)
    },
    changePage(e) {
      this.tabletest = changePage(e, this.changeData)
    }
  },
  mounted() {
    const data = pageData.length / 10
    this.total = pageData.length
    if(data > 1) {
      this.show = true
      this.tabletest = pageData.slice(0, 10)
     
    }
  }
}
</script>


