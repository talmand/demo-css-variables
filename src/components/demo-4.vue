<template>
<div class="demo">
  <div class="edit-container">
    <button class="edit" @click="editNotify('positive')"><font-awesome-icon icon="pencil-alt"></font-awesome-icon></button>
    <Notify4 ref="positive" type="positive">this is positive</Notify4>
  </div>
  <div class="edit-container">
    <button class="edit" @click="editNotify('negative')"><font-awesome-icon icon="pencil-alt"></font-awesome-icon></button>
    <Notify4 type="negative">this is negative</Notify4>
  </div>
  <div class="edit-container">
    <button class="edit" @click="editNotify('warning')"><font-awesome-icon icon="pencil-alt"></font-awesome-icon></button>
    <Notify4 type="warning">this is warning</Notify4>
  </div>
  <div class="edit-container">
    <button class="edit" @click="editNotify('info')"><font-awesome-icon icon="pencil-alt"></font-awesome-icon></button>
    <Notify4 type="info">this is info</Notify4>
  </div>
</div>
</template>

<script>
import Notify4 from '@/components/notify-4.vue';

export default {
  name: 'demo-4',

  components: {
    Notify4
  },

  methods: {
    editNotify (type) {
      this.$parent.showThemePanel = true;
      this.$parent.editType = type;
      this.$parent.editTarget = this.$refs[type].$el;
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
