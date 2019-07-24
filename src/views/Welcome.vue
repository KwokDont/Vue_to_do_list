<template>
  <div id="welcome">
    <div id="nav">
      <a-button @click="handleUse">开始使用</a-button>
    </div>
    <a-row type="flex" class="row-bg" justify="center">
      <a-col :span="2">请输入姓名：</a-col>
      <a-col :span="4">
        <a-input v-model="name" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "welcome",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    handleUse() {
      if (this.name !== "") {
        this.$store.commit("setUsername", { name: this.name });
        this.$router.push("/home/todolist");
      } else {
        this.$message({
          message: "请输入用户名",
          type: "warning"
        });
      }
    }
  }
};
</script>


<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>