<template>
<div class="table">
  <div class="select">
    <selectTime
      :directlyShowTime="true"
      class="select-time"
    ></selectTime>
    <div class="select-type">
      <el-select v-model="select" @change="selectChange">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          >
        </el-option>
      </el-select>
    </div>
  </div>
  <div>
    <el-table
        :data="tableDtate"
        :header-cell-style="{ background: '#F1F3F7', color: '#2f354d', height: '10px' }"
        style="width: 100%"
        class="el-table">
        <el-table-column
          prop="num"
          label="数量"
          width="80">
        </el-table-column>
        <el-table-column
          prop="date"
          label="最后出现"
          width="180">
        </el-table-column>
        <el-table-column
          prop="content"
          label="内容"
          color="#319ffc"
        >
          <template slot-scope="scope">
            <!-- <Tag></Tag> -->
            <el-popover :trigger="trigger" placement="top" class="table-content">
              <p>{{ scope.row.conexpress }}</p>
              <div slot="reference" class="name-wrapper" >
                <el-tag size="medium" style="display: inline-block; margin-right: 10px; color: white; background: rgb(233, 30, 99);" v-if="scope.row.errortype">! {{ scope.row.errortype }}</el-tag>
                <p style="display: inline-block; margin: 0">{{ scope.row.content }}</p>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          prop="visitors"
          label="影响访客数量"
          width="180"
          style="padding-left: 12px"
          >
        </el-table-column>
        <el-table-column
          prop="type"
          label="控制台错误类型"
          width="180">
        </el-table-column>
    </el-table>
    <el-pagination
      v-if="show"
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="changePage"
      class="pagination"
    >
    </el-pagination>

  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        select:'全部'
      }
    },
    props: {
      tableDtate: {
        type: Array
      },
      options: {
        type: Array
      },
      show: {
        type: Boolean
      },
      total: {
        type: Number
      },
      trigger: {
        type: String
      }
    },
    methods: {
      selectChange(e) {
        this.$emit('change', e)
      },
      changePage(e) {
        this.$emit('changePage', e)
      }

    },
  }
</script>

 <style lang="scss" scope>
 .table {
    margin: 50px 20px;
    .select {
      &-time {
        display: inline-block;
      }
      &-type {
        display: inline-block;
        margin-left: 12px;
      }
    }
    .el-table {
      margin: 20px 0;
      color: #7a859e;
      border: 1px solid #EBEEF5;
      border-radius: 6px;
      tr {
        td:nth-child(3) {
          color: #319ffc;
        }
        td:nth-child(4) {
          text-align: center;
        }
        td:nth-child(5) {
          text-align: center;
        }
        th {
          background: #F1F3F7;
          color: rgba(0, 0, 0, 0.87);
        }

      }
      .cell {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .pagination {
      float: right;
      margin-bottom: 80px;
    }

 }

 </style>
