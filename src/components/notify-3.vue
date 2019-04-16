<template>
<div class="notify" :class="type.class">
  <div class="icon">
    <font-awesome-icon :icon="type.icon"></font-awesome-icon>
  </div>
  <div class="content">
    <div class="text"><slot></slot></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'notify-3',

  props: {
    type: Object
  },

  mounted () {
    Object.keys(this.type.tokens).forEach(property => {
      this.$el.style.setProperty(property, this.type.tokens[property]);
    });
  }
}
</script>

<style lang="scss" scoped>
.notify {
  background-color: #fff;
  border: {
    color: var(--border-color);
    radius: 4px;
    style: solid;
    width: 6px;
  }
  border-right-width: 16px;
  margin: 20px;
  min-height: 64px;
  overflow: hidden;
}

.icon {
  align-items: center;
  background-color: var(--background-color);
  color: #fff;
  display: flex;
  justify-content: center;
  width: 48px;

  svg {
    height: 24px;
    width: 24px;
  }
}

.content {
  flex-grow: 1;
}

.text {
  align-items: center;
  flex-grow: 1;
  font-size: 16px;
  padding: 0 16px;
}
</style>
