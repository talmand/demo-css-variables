<template>
<div class="demo">
  <Notify3 type="positive">this is positive</Notify3>
  <Notify3 type="negative">this is negative</Notify3>
  <Notify3 type="warning">this is warning</Notify3>
  <Notify3 type="info">this is info</Notify3>
</div>
</template>

<script>
import Notify3 from "@/components/notify-3.vue";

export default {
  name: 'demo-3',

  components: {
    Notify3
  }
}
</script>
