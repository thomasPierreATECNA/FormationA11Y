<script>
import { marked } from "marked";

export default {
  name: "Alert",
  props: {
    type: { type: String, required: false },
    title: { type: String, required: false },
    text: { type: String, required: true },
  },
  computed: {
    renderedText() {
      return marked(this.text || "");
    },
  },
};
</script>

<template>
  <blockquote :class="`Alert Alert--${type}`">
    <header v-if="title">
      <carbon-idea v-if="type === 'idea'" />
      <carbon-checkmark v-if="type === 'success'" />
      <carbon-information v-if="type === 'information'" />
      <carbon-warning v-if="type === 'warning'" />
      <carbon-warning v-if="type === 'error'" />
      {{ title }}
    </header>
    <div v-html="renderedText"></div>
  </blockquote>
</template>

<style lang="css" scoped>
.Alert {
  display: flex;
  flex-direction: column;
  border-inline-start-color: var(--color);

  header {
    color: var(--color);
    margin-block-end: 0.2em;
  }

  div * {
    line-height: 1.25;
    font-size: .9rem;
    padding-block: 0.5rem;

    &:is(p) {
      margin: 0;
      text-wrap: auto;
    }
  }
}


.Alert--idea {
  --color: var(--blue-500);
}

.Alert--success {
  --color: var(--success-500);
}

.Alert--information {
  --color: var(--info-500);
}

.Alert--warning {
  --color: var(--warning-700);
}

.Alert--error {
  --color: var(--error-500);
}
</style>