<script>
export default {
  name: "Btn",
    props: {
    class: { type: String, required: false },
    label: { type: String, required: false },
    targetId: { type: String, required: false },
  },
  methods: {
    handleBlur() {
      if (this.targetId) {
        document.getElementById(this.targetId)?.focus();
      }
    },
  },
};
</script>

<template>
  <button :class="class" @blur="handleBlur">{{ label }}</button>
</template>

