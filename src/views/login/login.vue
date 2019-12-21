<template>
  <div class="login">
    <el-card class="box-card">
      <div class="logo">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 表单 -->
      <el-form style="margin-top: 15px">
        <el-form-item>
          <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>

        <el-form-item>
          <el-input style="width: 240px" placeholder="验证码"></el-input>
          <el-button style="float: right" plain>发送验证码</el-button>
        </el-form-item>

        <el-form-item>
          <el-checkbox>我已阅读并同意用户协议及条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  background-image: url("../../assets/img/login_bg.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-card {
    height: 350px;
    width: 430px;
    .logo {
      text-align: center;
      img {
        height: 45px;
      }
    }
  }
}
</style>
