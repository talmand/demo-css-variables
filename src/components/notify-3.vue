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
export default {
  name: 'notify-3',

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
      this.icon = this.$notifications3[this.type].icon;

      Object.keys(this.$notifications3[this.type].tokens).forEach(property => {
        this.$el.style.setProperty(property, this.$notifications3[this.type].tokens[property]);
      });
    }
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
    width: 4px;
  }
  margin: 20px;
  min-height: 48px;
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

.cancel,
.continue {
  align-items: center;
  appearance: none;
  background-color: #fff;
  border: {
    color: gray;
    style: solid;
    width: 2px;
  }
  border-radius: 4px;
  color: gray;
  cursor: pointer;
  font-weight: 700;
  margin: 4px;
  transition: 0.5s;

  &:hover {
    background-color: darken(white, 10);
    border-color: darken(gray, 10);
  }
}
</style>
