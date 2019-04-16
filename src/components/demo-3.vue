<template>
<div class="demo">
  <Notify3 :type="notifications.positive">this is positive</Notify3>
  <Notify3 :type="notifications.negative">this is negative</Notify3>
  <Notify3 :type="notifications.warning">this is warning</Notify3>
  <Notify3 :type="notifications.info">this is info</Notify3>
</div>
</template>

<script>
import notifications3 from '@/assets/notifications-3.json'
import Notify3 from "@/components/notify-3.vue";

export default {
  name: 'demo-3',

  components: {
    Notify3
  },

  data () {
    return {
      notifications: notifications3
    }
  }
}
</script>
