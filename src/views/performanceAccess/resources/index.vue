<template>
  <div class="main">
    <div class="top">
      <!-- <el-alert :closable="false" title="menu 3" /> -->
      <selectTime class="selectTime" style="float:left" :directlyShowTime="true" @change="changeTime"></selectTime>
      <div class="search" style="float:right">
        <el-input style="width:400px" v-model="search_info" placeholder="输入关键词查找信息，点击选项跳转到详情页" @keyup.enter.native="searchinfo"> </el-input>
      </div>
    </div>
    <div class="table-block" style="margin-top: 60px">
      <el-table :data="tableData" style="width: 100%" :cell-style="changeCellStyle" :header-cell-style="{ background: '#F1F3F7', color: '#2f354d', height: '10px' }">
        <el-table-column prop="nums" label="数量" width="80"> </el-table-column>
        <el-table-column prop="name" label="Apdex" width="180" :render-header="renderHeader">
          <template slot-scope="scope">
            <el-button class="apdex_button" :type="btnType(scope.row.name)">
             <span>{{ scope.row.name }}<sub>0.5</sub>
             </span>
            </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="内容">
          <template slot-scope="scope">
            {{ scope.row.address }}
            <el-tooltip class="item" effect="dark" content="按链接跳转" placement="top">
              <i class="el-icon-link"></i>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="impressed" label="影响访客数" width="180"> </el-table-column>
      </el-table>
    </div>
    <div class="pages-bar" v-if="tableData.length != 0">
      <el-pagination
        class="pages"
        background
        layout="prev, pager, next"
        :page-size="page_size"
        :total="tableData.length"
        :current-page.sync="page_current"
        @current-change="handlePage"
        :hide-on-single-page="true"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resources',
  data() {
    return {
      search_info: '',
      page_size: 2,
      page_current: 1,
      tableData: [
        {
          nums: 28,
          name: '0.98',
          address: 'http://www.xcxwo.com/static-20170029/css/animate.css',
          impressed: 28
        },
        {
          nums: 49,
          name: '1',
          address: 'http://www.xcxwo.com/static/css/animate.css',
          impressed: 49
        },
        {
          nums: 49,
          name: '1',
          address: 'http://www.xcxwo.com/20170029/animate.css',
          impressed: 15
        },
        {
          nums: 49,
          name: '1',
          address: 'http://www.xcxwo.com/static-20170029/css/animate.css',
          impressed: 49
        },
        {
          nums: 28,
          name: '0.98',
          address: 'http://www.xcxwo.com/static-20170029/css/animate.css',
          impressed: 28
        },
        {
          nums: 49,
          name: '1',
          address: 'http://www.xcxwo.com/static/css/animate.css',
          impressed: 49
        },
        {
          nums: 49,
          name: '1',
          address: 'http://www.xcxwo.com/20170029/animate.css',
          impressed: 15
        },
        {
          nums: 49,
          name: '1',
          address: 'http://www.xcxwo.com/static-20170029/css/animate.css',
          impressed: 49
        },
        {
          nums: 28,
          name: '0.98',
          address: 'http://www.xcxwo.com/static-20170029/css/animate.css',
          impressed: 28
        },
        {
          nums: 49,
          name: '1',
          address: 'http://www.xcxwo.com/static/css/animate.css',
          impressed: 49
        },
        {
          nums: 49,
          name: '1',
          address: 'http://www.xcxwo.com/20170029/animate.css',
          impressed: 15
        },
        {
          nums: 49,
          name: '1',
          address: 'http://www.xcxwo.com/static-20170029/css/animate.css',
          impressed: 49
        }
      ]
    }
  },

  methods: {
    btnType(val) {
      if(val>=0.9){
        return "primary"
      }
      if(val<0.9 && val >= 0.8){
        return "success"
      }
      if(val<0.8 && val >= 0.7){
        return "warning"
      }
      if(val<0.7 && val >= 0.5){
        return "danger"
      }
      if(val<0.5){
        return "info"
      }
    },
    changeTime(e) {
      console.log(e)
    },
    searchinfo() {
      if (this.search_info != '') {
        this.$message(`当前搜索内容为${this.search_info}`)
        this.search_info = ''
      }
    },
    changeCellStyle(row, column, rowIndex, columnIndex) {
      //列的label的名称
      if (row.column.label === '内容') {
        return 'color:#319ffc' //修改链接字体颜色
      } else {
        return ''
      }
    },

    // render 事件
    renderHeader(h, { column }) {
      // h即为cerateElement的简写，具体可看vue官方文档
      return h(
        'div',
        {
          style: 'display:flex;margin:auto;'
        },
        [
          h('span', column.label),
          h('promptMessage', {
            props: { messages: ['了解更多'] }
          })
        ]
      )
    },

    handlePage(val) {
      this.$message(`当前展示第${val}页的内容`)
    }
  }
}
</script>
<style scoped>
.main {
  padding: 30px;
  /* background-color: antiquewhite; */
}
.top {
  margin-bottom: 30px;
}

.pages-bar {
  margin-top: 30px;
  float: right;
}
.el-table th {
  height: 20px !important;
  padding: 0px;
}
.el-tooltip__popper {
  padding: 15px;
}
.apdex_button {
  height: 28px;
  padding: 0 10px;
  border-radius: 14px;
}
</style>
