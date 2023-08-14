<template>
    <div>
      <el-select v-model="select" @change="selectChange"  placeholder="请选择时间">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
</template>

<script>
  export default {
    name: 'index',
    props:{
      directlyShowTime:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{
        select:'4hours',
        options: [{
          value: 'today',
          label: '今天'
        }, {
          value: '60min',
          label: '近60分钟'
        }, {
          value: '4hours',
          label: '近4小时'
        }, {
          value: '6hours',
          label: '近6小时'
        }, {
          value: '12hours',
          label: '近12小时'
        },{
          value: '24hours',
          label: '近24小时'
        },{
          value: '2days',
          label: '近2天'
        },{
          value: '3days',
          label: '近3天'
        },{
          value: '7days',
          label: '近7天'
        },{
          value: '15days',
          label: '近15天'
        }],
      }
    },
    methods:{
      selectChange(e){
        this.$emit('change',e)
        if(this.directlyShowTime){
          this.$message('选择了'+e)
        }
      }
    }
  }
</script>

<style scoped>

</style>
