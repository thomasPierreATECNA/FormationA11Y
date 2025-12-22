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
      <carbon-idea v-if="type === 'idea'"/> 
      <carbon-checkmark v-if="type === 'success'"/> 
      <carbon-information v-if="type === 'information'"/> 
      <carbon-warning v-if="type === 'warning'"/> 
      <carbon-warning v-if="type === 'danger'"/> 
      {{title}}
    </header>
    <div v-html="renderedText"></div>
  </blockquote>
</template>

<style lang="css" scoped>
  .Alert{
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
    }
  }


  .Alert--idea { --color:  var(--green-500); }
  .Alert--success { --color:  var(--green-500); }
  .Alert--information { --color:  var(--blue-500); }
  .Alert--warning { --color:  var(--orange-500); }
  .Alert--danger { --color:  var(--red-500); }
</style>