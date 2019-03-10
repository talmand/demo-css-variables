<template>
<div class="demo">
  <div v-for="(key, value) in $notifications4" :key="value" class="edit-container">
    <button class="edit" @click="editNotify(value)"><font-awesome-icon icon="pencil-alt"></font-awesome-icon></button>
    <Notify5 :ref="value" :type="value">this is {{ value }}</Notify5>
  </div>
</div>
</template>

<script>
import Notify5 from '@/components/notify-5.vue';

export default {
  name: 'demo-5',

  components: {
    Notify5
  },

  data() {
    return {
      
    }
  },

  methods: {
    editNotify (type) {
      this.$parent.showThemePanel = true;
      this.$parent.editType = type;
      this.$parent.editTarget = this.$refs[type][0].$el;
    }
  },
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
