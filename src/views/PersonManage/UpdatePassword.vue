
<template>
  <div class="personalManage_container">
    <el-card>
      <!--        面包屑导航区-->
      <div class="updatePassword_box">
        <el-form ref="updatePasswordFormRef" :model="updatePasswordForm" status-icon :rules="updatePasswordFormRules" :label-position="labelPosition" class="updatePassword_form" label-width="150px">
          <el-form-item label="原密码" prop="userPassword">
            <el-input v-model="updatePasswordForm.userPassword" type="password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPassword">
            <el-input v-model="updatePasswordForm.newPassword" type="password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="confirmPassword">
            <el-input type="password" v-model="updatePasswordForm.confirmPassword" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="passwordUpdate">修改</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
  import qs from 'qs'
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'))
        } else {
          if (this.updatePasswordForm.confirmPassword !== '') {
            this.$refs.updatePasswordFormRef.validateField('confirmPassword')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.updatePasswordForm.newPassword) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        labelPosition: 'left',
        // 个人信息管理的表单的数据绑定对象
        updatePasswordForm: {
          userPassword:'',
          newPassword: '',
          confirmPassword: ''
        },
        updatePasswordFormRules: {
          userPassword:[
            {required:true,message:'请输入原密码',trigger:'blur'}
          ],
          newPassword: [
            { validator: validatePass, trigger: 'blur' }
          ],
          confirmPassword: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      }
    },
    //页面加载时先查询个人信息
    created(){

    },
    methods: {
      // 修改个人密码并提交
      async passwordUpdate() {
        this.$refs.updatePasswordFormRef.validate(async valid => {
          if (!valid) return
          var userId = window.sessionStorage.getItem('userId')
          //判断原密码是否输入正确
          let passwords={
            userId:userId,
            oldPassword:this.updatePasswordForm.userPassword,
            newPassword:this.updatePasswordForm.newPassword
          }
          const {data:res2} = await this.$http.post('login/personalManage/modifiedPassword',qs.stringify(passwords))
          if(res2.code===201002){
            return this.$message.error('原密码输入错误！')
          }
          if(res2.code===0){
            //刷新显示信息
            this.updatePasswordForm.userPassword=''
            this.updatePasswordForm.newPassword=''
            this.updatePasswordForm.confirmPassword=''
            // 提示修改成功
            return this.$message.success('修改密码成功！')
          }
        })
      }
    },
    computed:{
      keepAliveConfig(){
        return this.$store.state.openedTab
      }
    },
    watch:{
      keepAliveConfig(openedTab){
        let isAlive=false
        for(let i=0;i<openedTab.length;i++){
          if(String(openedTab[i].name).toLowerCase()==String(this.$options.name).toLowerCase()){
            isAlive=true
            break
          }
        }
        if(!isAlive){
          this.$destroy()
        }
      }
    }
  }
</script>

<style scoped>
  .personalManage_container{

    height: 100%;
  }
  .updatePassword_box{
    margin-top: 30px;
  }
  .updatePassword_form{
    bottom: 0;
    width: 50%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .btns{
    display: flex;
    justify-content: flex-end;
  }
</style>

