<template>
<div class="demo">
  <div v-for="(key, value) in $notifications4" :key="value" class="edit-container">
    <button class="edit" @click="editNotify(value)" :disable="name"><font-awesome-icon icon="pencil-alt"></font-awesome-icon></button>
    <Notify5 :ref="value" :type="value">this is {{ value }}</Notify5>
  </div>
</div>
</template>

<script>
import Notify5 from '@/components/notify-5.vue';

const defaultNotification = {
  "icon": "question-circle",
  "tokens": {
    "--notify_background-color": "#ffffff",
    "--notify_border-color": "#707070",
    "--notify_border-radius": "4px",
    "--notify_border-style": "solid",
    "--notify_border-width": "6px",
    "--notify_margin": "20px",
    "--icon_background-color": "#707070",
    "--icon_color": "#ffffff",
    "--text_color": "#000000",
    "--text_font-size": "16px"
  }
}

export default {
  name: 'demo-5',

  components: {
    Notify5
  },

  data() {
    return {
      name: null
    }
  },

  methods: {
    editNotify (type) {
      this.$parent.showThemePanel = true;
      this.$parent.editType = type;
      this.$parent.editTarget = this.$refs[type][0].$el;
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
