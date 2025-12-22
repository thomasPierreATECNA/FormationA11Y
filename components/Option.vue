<script>
import { marked } from "marked"; 

export default {
  name: "ListItem",
  props: {
    title: { type: String, required: true },
    details: { type: String, required: false },
    description: { type: String, required: true },
  },
  computed: {
    renderedDetails() {
      return this.details ? marked(this.details) : null;
    },
    renderedDescription() {
      return this.description ? marked(this.description) : null;
    },
  },
};
</script>

<template>
  <li class="Option">
    <div class="flex gap-2 items-center">
      <b>{{title}}</b> 
      <small v-if="renderedDetails" v-html="renderedDetails"></small>
      <span class="grow mx-3 h-1 border-be border-dashed border-current opacity-30"></span>
      <span v-html="renderedDescription"></span>
    </div>
  </li>
</template>

<style>
  .Option {
    p {
      margin: 0;
      padding: 0;
    }
  }
</style>