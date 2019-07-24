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
        <a-menu @click="handleClick" style="width: 256px" mode="inline">
          <a-menu-item key="/home/todolist">
            <span>代办事项</span>
          </a-menu-item>
          <a-menu-item key="/home/me">
            <span>我的</span>
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col :span="12">
        <a-card hoverable>
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
    handleClick(e) {
      this.$router.push(e.key);
    },
    handleBack() {
      this.$confirm({
        title: "提示",
        content: "返回欢迎页面, 是否继续?",
        onOk: () => {
          this.$router.push("/");
        }
      });
    },
    handlePush() {
      this.$router.push("/");
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
