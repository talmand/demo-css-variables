<template>
<div class="demo">
  <div v-for="(key, value) in notifications" :key="value" class="edit-container">
    <Notify4 :type="key">this is {{ value }}</Notify4>
  </div>
</div>
</template>

<script>
import notifications4 from '@/assets/notifications-4.json'
import Notify4 from '@/components/notify-4.vue';

export default {
  name: 'demo-4',

  components: {
    Notify4
  },

  data () {
    return {
      notifications: notifications4
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-container {
  width: 100%;
}
.edit {
  align-items: center;
  background: none;
  border: {
    color: #fff;
    radius: 7px;
    style: solid;
    width: 1px;
  }
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  margin: 20px 0 20px 20px;
  opacity: 0.5;
  padding: 0 10px;

  &:hover {
    opacity: 1;
  }
}
</style>
