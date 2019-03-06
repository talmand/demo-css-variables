<template>
<div class="notify" :class="type">
  <div class="icon">
    <font-awesome-icon :icon="icon"></font-awesome-icon>
  </div>
  <div class="content">
    <div class="text"><slot></slot></div>
    <button class="cancel">cancel</button>
    <button class="continue">continue</button>
  </div>
</div>
</template>

<script>
import notifications from '@/assets/notifications-4.json'

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
      this.icon = notifications[this.type].icon;

      Object.keys(notifications[this.type].tokens).forEach(property => {
        this.$el.style.setProperty(property, notifications[this.type].tokens[property]);
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
  flex-grow: 1;
  margin: var(--notify_margin);
  min-height: 48px;
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

.cancel,
.continue {
  align-items: center;
  appearance: none;
  cursor: pointer;
  margin: 4px;
  transition: 0.5s;
}
.cancel {
  background-color: var(--cancel_background-color);
  border: {
    color: var(--cancel_border-color);
    style: var(--cancel_border-style);
    width: var(--cancel_border-width);
  }
  border-radius: var(--cancel_border-radius);
  color: var(--cancel_color);
  font-weight: var(--cancel_font-weight);

  &:hover {
    background-color: var(--cancel_hover_background-color);
    border-color: var(--cancel_hover_border-color);
    color: var(--cancel_hover_color);
  }
}
.continue {
  background-color: var(--continue_background-color);
  border: {
    color: var(--continue_border-color);
    style: var(--continue_border-style);
    width: var(--continue_border-width);
  }
  border-radius: var(--continue_border-radius);
  color: var(--continue_color);
  font-weight: var(--continue_font-weight);

  &:hover {
    background-color: var(--continue_hover_background-color);
    border-color: var(--continue_hover_border-color);
    color: var(--continue_hover_color);
  }
}
</style>
