<template>
  <div>
    <my-progress></my-progress>
    <my-progress prowidth="100" color="yellow" proheight="10">
      <template #format>
        <span class="house house-wujiaoxing-"></span>
      </template>
    </my-progress>

    <my-progress :textInside="true" proheight="30"></my-progress>
    <my-progress proheight="10" :proAnimation="true"></my-progress>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>

<style scoped>
.house {
  color: yellowgreen;
}
</style>
