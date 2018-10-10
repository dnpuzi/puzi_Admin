<template>
  <div class="app-container">
    <el-form ref="vipUserform" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="姓名" prop="username">
        <el-input v-model="form.username"/>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio label="男"/>
          <el-radio label="女"/>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="手机" prop="tel">
        <el-input v-model="form.tel" type="number"/>
      </el-form-item>
      <el-form-item label="学院">
        <el-select v-model="form.college" placeholder="请选择">
          <el-option
            v-for="item in this.$store.state.app.collegeList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="电脑型号" prop="dev_type">
        <el-input v-model="form.dev_type"/>
      </el-form-item>
      <el-form-item label="购机时间" prop="buytime">
        <el-date-picker v-model="form.buytime" type="date" placeholder="请选择时间"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('vipUserform')">确认</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  name: 'addVipUser',
  data() {
    return {
      rules: {
        username: [
          { required: true, message: '请输入会员姓名', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '请输入联系方式', trigger: 'blur'}
        ],
        dev_type: [
          { required: true, message: '请输入电脑型号', trigger: 'blur' }
        ],
        buytime: [
          { required: true, message: '请选择购机时间', trigger: 'blur' }
        ]
      },
      form: {
        username: '',
        sex: '女',
        tel: '',
        college: '',
        dev_type: '',
        buytime: '',
        vip_type: 1,
      }
    }
  },
  methods: {
    toDouble(str) { // 期望是数字字符串 '1' '2' '12' '10'
      str += ''
      if(str.length === 1) {
        return '0' + str
      }
      return str
    },
    getFormatDate(date) {
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      return `${year}-${this.toDouble(month)}-${this.toDouble(day)}`
    },
    onSubmit(vipUserform) {
      this.$refs[vipUserform].validate(valid => {
        if(valid) {
          let data = {
            username: this.form.username,
            sex: this.form.sex,
            tel: this.form.tel,
            college: this.form.college,
            dev_type: this.form.dev_type,
            buytime: this.getFormatDate(this.form.buytime),
            vip_type: this.form.vip_type,
          }
          this.$axios.post(this.$store.state.app.host + 'Admin/Admin/addBuyUser', qs.stringify(data))
          .then(res => {
            if(res.data.success) {
              this.form = {
                username: '',
                sex: '女',
                tel: '',
                college: '',
                dev_type: '',
                buytime: '',
                vip_type: 1,
              }
              this.$message({
                message: res.data.msg,
                type: 'success'
              })
            } else {
              this.$message.error(res.data.msg);
            }
          })
        }
      })
    },
    onReset() {
      this.form = {
        username: '',
        sex: '女',
        tel: '',
        college: '',
        dev_type: '',
        buytime: '',
        vip_type: 1,
      }
    }
  }
}
</script>