<template>
  <div>
    <a-row>
      <a-col>
        <a-card :body-style="{ padding: '0px' }">
          <img src="../assets/logo.png" class="image" />
          <div style="padding: 14px;">
            <span>{{getUsername}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <a-button type="text" class="button">操作按钮</a-button>
            </div>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'me',
  computed: {
    getUsername() {
      return this.$store.getters.getUsername;
    }
  },
}
</script>