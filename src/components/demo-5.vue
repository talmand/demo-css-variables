<template>
<div class="demo">
  <div id="theme_panel" :class="{edit: showThemePanel}">
    <button class="toggle-panel" :class="{hide: !showThemePanel}" @click="showThemePanel = !showThemePanel">X</button>

    <div class="content">
      <div>
        <button @click="save">save</button>
      </div>
      <label>{{ editType }}</label>

      <div id="properties">
        <div>
          <label for="icon">icon</label>
          <input id="icon" :type="inputType('icon')" :value="notifications[editType].icon" v-model="notifications[editType].icon" @change="changeProperty" />
        </div>
      
        <div v-for="(value, key) in notifications[editType].tokens" :key="key">
          <label :for="key">{{ key }}</label>
          <input :id="key" :type="inputType(key)" :value="value" v-model="notifications[editType].tokens[key]" @input="changeProperty" />
        </div>
      </div>
    </div>
  </div>

  <div v-for="(key, value) in notifications" :key="value" class="edit-container">
    <button class="edit-btn" @click="editNotify(value)"><font-awesome-icon icon="pencil-alt"></font-awesome-icon></button>
    <Notify5 :ref="value" :type="key">this is {{ value }}</Notify5>
  </div>

  <div id="new_panel">
    <label for="new_name">name</label>
    <input id="new_name" v-model="newName" />
    <button class="edit-btn" @click="newNotification"><font-awesome-icon icon="plus-circle"></font-awesome-icon><button>
  </div>
</div>
</template>

<script>
import notifications4 from '@/assets/notifications-4.json'
import Notify5 from '@/components/notify-5.vue';

const defaultNotification = {
  "icon": "question-circle",
  "tokens": {
    "--notify_background-color": "#ffffff",
    "--notify_border-color": "#707070",
    "--notify_border-radius": "4px",
    "--notify_border-style": "solid",
    "--notify_border-width": "6px",
    "--notify_margin": "20px",
    "--icon_background-color": "#707070",
    "--icon_color": "#ffffff",
    "--text_color": "#000000",
    "--text_font-size": "16px"
  }
}

export default {
  name: 'demo-5',

  components: {
    Notify5
  },

  data () {
    return {
      notifications: notifications4,
      showThemePanel: false,
      editType: 'positive',
      newName: ''
    }
  },

  methods: {
    editNotify (type) {
      this.showThemePanel = true;
      this.editType = type;
      this.editTarget = this.$refs[type][0].$el;
    },
    save: function () {
      let blob = new Blob([JSON.stringify(this.notifications, null, 2)], {type: 'text/plain;charset=utf-8'});
      let a = document.createElement('a');
      let url = URL.createObjectURL(blob);

      a.href = url;
      a.download = 'notifications-4.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    },
    changeProperty: function (e) {
      let key = e.target.id;
      let value = e.target.value;
      
      if (key === 'icon') {
        this.$refs.components.$refs[this.editType][0].icon = value;
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
  }
}
</script>

<style lang="scss" scoped>
.edit-container {
  width: 100%;
}
.edit-btn {
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

#theme_panel {
  background-color: #333;
  height: 100vh;
  left: 0;
  position: absolute;
  transition: 0.5s;
  width: 0;
  z-index: 100;

  &.edit {
    width: 200px;
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
    width: 100%;
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

#new_panel {
  color: #fff;
  justify-content: center;
  margin: 20px;
}
#new_name {
  margin-left: 10px;
}
</style>
