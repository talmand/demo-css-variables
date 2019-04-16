<template>
<div class="notify" :class="type">
  <div class="icon">
    <font-awesome-icon :icon="icon"></font-awesome-icon>
  </div>
  <div class="content">
    <div class="text"><slot></slot></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'notify-2',

  props: {
    icon: {
      type: String,
      default: 'question-circle'
    },
    type: {
      type: String,
      default: ''
    }
  },
}
</script>

<style lang="scss" scoped>
.notify {
  --positive: #307B21;
  --negative: #C11826;
  --warning: #C45413;
  --info: #4371AD;

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

  &.positive {
    --background-color: var(--positive);
    --border-color: var(--positive);
  }
  &.negative {
    --background-color: var(--negative);
    --border-color: var(--negative);
  }
  &.warning {
    --background-color: var(--warning);
    --border-color: var(--warning);
  }
  &.info {
    --background-color: var(--info);
    --border-color: var(--info);
  }
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
