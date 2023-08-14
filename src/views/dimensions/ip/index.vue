<template>
  <div>
    <Table
      :tableDtate="tabletest"
      :show="show"
      :total="total" 
      :options="options"
      @change="change"
      @changePage="changePage">
    </Table>
  </div>
</template>

<script>
import Table from '../../common/table'
import { changeData, changePage } from '../../common/index'
import { ipData, options } from '../data/data'
export default {
  components: {
    Table
  },
  data () {
    return {
      tabletest: ipData,
      show: false,
      total: 0,
      changeData: ipData,
      options: options
    }
  },
  methods: {
    change(e) {
      let newData = changeData(e, ipData)
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
    const data = ipData.length / 10
    this.total = ipData.length
    if(data > 1) {
      this.show = true
      this.tabletest = ipData.slice(0, 10)
     
    }
  },
}
</script>


