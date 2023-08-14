<template>
  <div class="personalManage_container">
    <el-card>
      <!--        面包屑导航区-->
      <div class="personalManage_box">
        <el-form ref="personalFormRef" :model="personalManageForm" status-icon :rules="personalFormRules" :label-position="labelPosition" class="personalManage_form" label-width="150px">
          <el-form-item label="用户ID" prop="userId">
            <el-input v-model="personalManageForm.userId" disabled></el-input>
          </el-form-item>
          <el-form-item label="用户姓名" prop="userName">
            <el-input v-model="personalManageForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="用户性别" prop="userSex">
            <el-input v-model="personalManageForm.userSex" ></el-input>
          </el-form-item>
          <el-form-item label="用户所属部门号" prop="userDep">
            <el-input v-model="personalManageForm.userDep" disabled></el-input>
          </el-form-item>
          <!--          <el-form-item label="用户身份证号" prop="userIdCard">-->
          <!--            <el-input v-model="personalManageForm.userIdcard" disabled></el-input>-->
          <!--          </el-form-item>-->
          <el-form-item label="用户手机号 " prop="userCellphone">
            <el-input v-model.number="personalManageForm.userCellphone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户电话号" prop="userTel">
            <el-input v-model.number="personalManageForm.userTel" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户电子邮箱" prop="userEmail">
            <el-input v-model="personalManageForm.userEmail"></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="infoUpdate">修改</el-button>
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
      // 验证手机号的规则
      var checkCellphone = (rule, value, callback) => {
        // 验证手机号的正则表达式
        const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/

        if (regMobile.test(value)) {
          return callback()
        }

        callback(new Error('请输入合法的手机号'))
      }

      var checkEmail = (rule, value, callback) => {
        // 验证邮箱的正则表达式
        const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
        // 如果校验通过
        if (regEmail.test(value)) {
          // 合法的邮箱
          return callback()
        }
        // 如果校验没有通过，则回调错误提示信息
        callback(new Error('请输入合法的邮箱'))
      }
      return {
        labelPosition: 'left',
        // 个人信息管理的表单的数据绑定对象
        personalManageForm: {
          userId: '1',
          userUsername: 'admin',
          userName: 'admin',
          userSex: '男',
          userDep: '工程部',
          userIdcard: '**',
          userCellphone: '13847515696',
          userTel: '13847515696',
          userEmail: '132@qq.com'
        },
        personalFormRules: {
          userSex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          userCellphone: [
            { required: true, message: '用户手机号不能为空' ,trigger: 'blur'},
            { validator: checkCellphone,trigger: 'blur' }
          ],
          userEmail:[
            {required:false,message:'请输入邮箱',trigger:'blur'},
            {validator:checkEmail,trigger: 'blur'}
          ]
        }
      }
    },
    //页面加载时先查询个人信息
    created(){
      this.getUserInfo()
    },
    methods: {
      // //获取个人信息
      // async getUserInfo() {
      //   //var loginInfo = window.sessionStorage.getItem('userLoad')
      //   //loginInfo=JSON.parse(loginInfo)
      //   var userId = window.sessionStorage.getItem('userId')
      //   const { data: res } =await this.$http.get('login/personalManage/getUserInfo?userId='+userId)
      //   if (res.code !== 0) {
      //     return this.$message.error(res.msg)
      //   }
      //   this.personalManageForm.userId = userId
      //   this.personalManageForm.userName = res.data.userName
      //   this.personalManageForm.userSex = res.data.userSex
      //   this.personalManageForm.userDep = res.data.userDep
      //   this.personalManageForm.userCellphone = res.data.userCellphone
      //   this.personalManageForm.userTel = res.data.userTel
      //   this.personalManageForm.userEmail = res.data.userEmail
      //   this.$message.success('获取个人信息成功！')
      // },
      // // 修改个人信息并提交
      // async infoUpdate() {
      //   this.$refs.personalFormRef.validate(async valid => {
      //     if (!valid) return
      //     // var loginInfo = window.sessionStorage.getItem('userLoad')
      //     // loginInfo=JSON.parse(loginInfo)
      //     var userId = window.sessionStorage.getItem('userId')
      //     const { data: res1 } =await this.$http.get('login/personalManage/getUserInfo?userId='+userId)
      //     //发起修改个人信息的数据请求
      //     let obj={
      //       userId: this.personalManageForm.userId,
      //       userPassword: res1.data.userPassword,
      //       userName: this.personalManageForm.userName,
      //       userSex: this.personalManageForm.userSex,
      //       userDep: this.personalManageForm.userDep,
      //       userCellphone: this.personalManageForm.userCellphone,
      //       userTel: this.personalManageForm.userTel,
      //       userEmail: this.personalManageForm.userEmail
      //     }
      //     const { data: res } = await this.$http.post('login/personalManage/updateUserInfo',qs.stringify(obj))
      //     if (res.code !== 0) {
      //       return this.$message.error('更新个人信息失败！')
      //     }
      //     //刷新显示信息
      //     this.getUserInfo()
      //     // 提示修改成功
      //     this.$message.success('更新个人信息成功！')
      //   })
      // }
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
  .personalManage_box{
    margin-top: 30px;
  }
  .personalManage_form{
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
