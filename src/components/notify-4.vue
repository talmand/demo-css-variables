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
  name: 'notify-4',

  props: {
    type: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      icon: 'question-circle'
    }
  },

  mounted () {
    if (this.type) {
      this.icon = this.$notifications4[this.type].icon;

      Object.keys(this.$notifications4[this.type].tokens).forEach(property => {
        this.$el.style.setProperty(property, this.$notifications4[this.type].tokens[property]);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.notify {
  background-color: var(--notify_background-color);
  border: {
    color: var(--notify_border-color);
    radius: var(--notify_border-radius);
    style: var(--notify_border-style);
    width: var(--notify_border-width);
  }
  border-right-width: 16px;
  flex-grow: 1;
  margin: var(--notify_margin);
  min-height: 64px;
  overflow: hidden;
  transition: 0.5s;
}

.icon {
  align-items: center;
  background-color: var(--icon_background-color);
  color: var(--icon_color);
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
  color: var(--text_color);
  flex-grow: 1;
  font-size: var(--text_font-size);
  padding: 0 16px;
}
</style>
