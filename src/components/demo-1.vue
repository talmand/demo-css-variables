<template>
<div class="demo">
  <Notify1 type="positive" icon="plus-circle">this is positive</Notify1>
  <Notify1 type="negative" icon="minus-circle">this is negative</Notify1>
  <Notify1 type="warning" icon="exclamation-circle">this is warning</Notify1>
  <Notify1 type="info" icon="question-circle">this is info</Notify1>
</div>
</template>

<script>
import Notify1 from "@/components/notify-1.vue";

export default {
  name: "demo-1",

  components: {
    Notify1
  }
};
</script>

<style lang="scss" scoped>

</style>
