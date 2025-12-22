

<script>
export default {
  props: {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    w: { type: Number, required: true },
    h: { type: Number, required: true },
    color: { type: String}
  },
  computed: {
    boxStyle() {
      return {
        position: 'absolute',
        left: `${this.x}px`,
        top: `${this.y}px`,
        width: `${this.w}px`,
        height: `${this.h}px`,
        border:  `2px solid ${this.color ?? "#f43f5e"}`
      };
    }
  }
};
</script>

<template>
  <div class="box" :style="boxStyle">&nbsp;</div>
</template>

<style scoped>
.box {
  position: absolute;
  border-radius: 5px;
}
</style>