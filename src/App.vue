<template>
<div id="app">
  <div id="demos_panel">
    <button
      v-for="(demo, key) in demos"
      :key="key"
      :class="{current: currentComponent === `${demo}`}"
      @click="changeHash(`${demo}`)"
    >{{ demo }}</button>
  </div>

  <div id="container">
    <div id="theme_panel" :class="{show: showThemePanel}">
      <button class="toggle-panel" :class="{hide: !showThemePanel}" @click="showThemePanel = !showThemePanel">X</button>

      <div class="content">
        <label>{{ editType }}</label>

        <div id="properties">
          <div>
            <label for="icon">icon</label>
            <input id="icon" :type="inputType('icon')" :value="notifications[editType].icon" @change="changeProperty" />
          </div>
        
          <div v-for="(value, key) in notifications[editType].tokens" :key="key">
            <label :for="key">{{ key }}</label>
            <input :id="key" :type="inputType(key)" :value="value" @change="changeProperty" />
          </div>
        </div>
      </div>
    </div>
    <div id="components">
      <transition :name="currentSlide" mode="out-in">
        <component ref="components" :is="currentComponent" />
      </transition>
    </div>
  </div>

  <div id="credits">
    <h2>Theming Vue Components with CSS Variables</h2>
    <h2>https://github.com/talmand/demo-css-variables</h2>
  </div>
</div>
</template>

<script>
import notifications from '@/assets/notifications-4.json'
import Demo1 from '@/components/demo-1.vue';
import Demo2 from '@/components/demo-2.vue';
import Demo3 from '@/components/demo-3.vue';
import Demo4 from '@/components/demo-4.vue';

export default {
  name: 'app',

  components: {
    Demo1,
    Demo2,
    Demo3,
    Demo4
  },

  data () {
    return {
      notifications: notifications,
      currentComponent: 'Demo1',
      showThemePanel: false,
      types: [],
      icon: '',
      editType: 'positive',
      editTarget: null,
      demos: ['Demo1', 'Demo2', 'Demo3', 'Demo4'],
      currentSlide: 'slide-left'
    }
  },

  methods: {
    changeProperty: function (e) {
      let key = e.target.id;
      let value = e.target.value;
      
      if (key === 'icon') {
        this.$refs.components.$refs[this.editType].icon = value;
      } else {
        this.editTarget.style.setProperty(key, value);
      }
    },
    inputType: function (key) {
      if (key.includes('color')) {
        return 'color';
      }
      return 'text';
    },
    changeHash: function (demo) {
      let currentDemoNumber = parseInt(window.location.hash.slice(-1));
      let nextDemoNumber = parseInt(demo.slice(-1));

      if (currentDemoNumber < nextDemoNumber) {
        this.currentSlide = 'slide-left';
      } else {
        this.currentSlide = 'slide-right';
      }

      window.location.hash = demo;
    },
    getHash: function () {
      let hash = window.location.hash.replace(/^#/, '');
      let index = this.demos.indexOf(hash);
    
      if (index > -1) {
        this.currentComponent = hash;
      }
    }
  },

  watch: {
    currentComponent: function () {
      if (this.currentComponent !== 'Demo4') {
        this.showThemePanel = false;
      }
    }
  },

  mounted () {
    Object.keys(notifications).forEach(type => {
      this.types.push(type);
    });

    this.getHash();
    window.addEventListener('hashchange', this.getHash);
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

html,
body {
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
}
body * {
  display: flex;
}

body {
  background-image: radial-gradient(ellipse at center, rgba(98,125,77,1) 0%,rgba(31,59,8,1) 100%);
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: 400;
}

#app {
  height: 100%;
  overflow: hidden;

  .demo {
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 8px;
    flex-direction: column;
    justify-content: center;
    width: 75vw;
  }
}

#demos_panel {
  display: flex;
  justify-content: center;
  left: 0;
  margin: auto;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 0;

  button {
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
    padding: 4px 8px;
    transition: 0.5s;

    &:hover,
    &.current {
      background-color: darken(white, 30);
      border-color: darken(gray, 30);
      color: #fff;
    }

    &.current {
      background-color: rebeccapurple;
    }
  }
}

#container {
  display: flex;
  flex-grow: 1;
}
#theme_panel {
  background-color: #333;
  border-right: {
    color: rebeccapurple;
    style: solid;
    width: 7px;
  }
  height: 100vh;
  position: relative;
  transition: 0.5s;
  width: 0;

  &.show {
    width: 250px;
  }

  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
  }

  .toggle-panel {
    background: none;
    border: {
      color: #fff;
      radius: 7px;
      style: solid;
      width: 1px;
    }
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 20px;
    height: 40px;
    line-height: 1;
    opacity: 0.25;
    position: absolute;
    right: -70px;
    top: 10px;
    width: 40px;

    &.hide {
      display: none;
    }
  }

  label {
    color: #fff;
    font-size: 16px;
    margin: 10px 10px 0 10px;
    width: 200px;
  }
  button,
  select {
    margin: 10px;
    padding: 10px;
    width: 200px;
  }
}
#properties {
  flex-direction: column;
  padding: 20px 0;

  & > div {
    flex-direction: column;
    flex-shrink: 0;
  }
  label {
    font-size: 12px;
  }
  input {
    margin: 0 10px;
  }
}
#components {
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
}

#credits {
  align-items: center;
  bottom: 0;
  color: #fff;
  flex-direction: column;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  text-align: center;
}

.slide-left-enter { opacity: 0; transform: scale3d(2, 0.5, 1) translate3d(400px, 0, 0); }
.slide-left-enter-to { transform: scale3d(1, 1, 1); }
.slide-left-enter-active,
.slide-left-leave-active { transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
.slide-left-leave { transform: scale3d(1, 1, 1); }
.slide-left-leave-to { opacity: 0; transform: scale3d(2, 0.5, 1) translate3d(-400px, 0, 0); }

.slide-right-enter { opacity: 0; transform: scale3d(2, 0.5, 1) translate3d(-400px, 0, 0); }
.slide-right-enter-to { transform: scale3d(1, 1, 1); }
.slide-right-enter-active,
.slide-right-leave-active { transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
.slide-right-leave { transform: scale3d(1, 1, 1); }
.slide-right-leave-to { opacity: 0; transform: scale3d(2, 0.5, 1) translate3d(400px, 0, 0); }
</style>
