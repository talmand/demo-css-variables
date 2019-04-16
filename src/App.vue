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
import Demo1 from '@/components/demo-1.vue';
import Demo2 from '@/components/demo-2.vue';
import Demo3 from '@/components/demo-3.vue';
import Demo4 from '@/components/demo-4.vue';
import Demo5 from '@/components/demo-5.vue';

export default {
  name: 'app',

  components: {
    Demo1,
    Demo2,
    Demo3,
    Demo4,
    Demo5
  },

  data () {
    return {
      currentComponent: 'Demo1',
      types: [],
      icon: '',
      editTarget: null,
      demos: ['Demo1', 'Demo2', 'Demo3', 'Demo4', 'Demo5'],
      currentSlide: 'slide-left'
    }
  },

  methods: {
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

  mounted () {
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

  h2 {
    margin: 0 0 10px;
  }
}

.slide-left-enter { opacity: 0; transform: translate3d(100px, 0, 0); }
.slide-left-enter-active,
.slide-left-leave-active { transition: 0.5s; }
.slide-left-leave-to { opacity: 0; transform: translate3d(-100px, 0, 0); }

.slide-right-enter { opacity: 0; transform: translate3d(-100px, 0, 0); }
.slide-right-enter-active,
.slide-right-leave-active { transition: 0.5s; }
.slide-right-leave-to { opacity: 0; transform: translate3d(100px, 0, 0); }
</style>
