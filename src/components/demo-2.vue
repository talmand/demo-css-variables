<template>
<div class="demo">
  <Notify2 type="positive" icon="plus-circle">this is positive</Notify2>
  <Notify2 type="negative" icon="minus-circle">this is negative</Notify2>
  <Notify2 type="warning" icon="exclamation-circle">this is warning</Notify2>
  <Notify2 type="info" icon="question-circle">this is info</Notify2>
</div>
</template>

<script>
import Notify2 from "@/components/notify-2.vue";

export default {
  name: 'demo-2',

  components: {
    Notify2
  }
}
</script>

<style lang="scss" scoped>

</style>
