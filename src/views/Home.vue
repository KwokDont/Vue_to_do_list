<template>
  <div class="home">
    <a-row :gutter="20">
      <a-col :span="4">
        <a-button @click="handleBack">返回</a-button>
      </a-col>
      <a-col :span="4" :offset="12">
        <a-tag>{{getUsername}}</a-tag>
      </a-col>
    </a-row>
    <a-row :gutter="20">
      <a-col :span="4">
        <h5>导航栏</h5>
        <a-menu default-active="$route.path" class="el-menu-vertical-demo" router>
          <a-menu-item index="/home/todolist">
            <i class="el-icon-menu"></i>
            <span slot="title">代办事项</span>
          </a-menu-item>
          <a-menu-item index="/home/me">
            <i class="el-icon-setting"></i>
            <span slot="title">我的</span>
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col :span="12">
        <a-card class="box-card">
          <router-view />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  computed: {
    getUsername() {
      return this.$store.getters.getUsername;
    }
  },
  methods: {
    handleBack() {
      this.$confirm("返回欢迎页面, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    }
  }
};
</script>

<style>
/* .home button {
  margin-right: 200px;
}
.home span {
  margin-left: 200px;
} */
</style>
