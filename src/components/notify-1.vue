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
  name: "notify-1",

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
};
</script>

<style lang="scss" scoped>
$positive: #307B21;
$negative: #C11826;
$warning: #C45413;
$info: #4371AD;

.notify {
  background-color: #fff;
  border: {
    radius: 4px;
    style: solid;
    width: 6px;
  }
  border-right-width: 16px;
  margin: 20px;
  min-height: 64px;
  overflow: hidden;

  &.positive {
    border-color: $positive;

    .icon {
      background-color: $positive;
    }
  }
  &.negative {
    border-color: $negative;

    .icon {
      background-color: $negative;
    }
  }
  &.warning {
    border-color: $warning;

    .icon {
      background-color: $warning;
    }
  }
  &.info {
    border-color: $info;

    .icon {
      background-color: $info;
    }
  }
}

.icon {
  align-items: center;
  color: #fff;
  display: flex;
  justify-content: center;
  width: 64px;

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
