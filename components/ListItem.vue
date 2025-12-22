<script>
import { marked } from "marked"; 

export default {
  name: "ListItem",
  props: {
    label: { type: String, required: true },
    image: { type: String, required: false },
    link: { type: String, required: false },
  },
  computed: {
    renderedLabel() {
      return marked(this.label);
    },
  },
};
</script>

<template>
  <li v-click v-motion :duration="250" :initial="{ x: 200 }" :enter="{ x: 0 }" class="ListItem">
    <div class="flex gap-5 items-center justify-between">
      <span v-html="renderedLabel"></span>
      
      <span v-if="link && image" class="grow h-1 border-be border-dashed border-current opacity-30"></span>
      
      <a v-if="link && image" :href="link" target="_blank" class="!border-none" rel="noopener noreferrer">
        <img :src="`${image}`" alt="" class="h-10 max-w-20 object-contain"/>
      </a>

      <img v-if="!link && image" :src="image" alt="" class="h-10 max-w-20 object-contain"  />
    </div>
  </li>
</template>



<style>
  .ListItem {
    p {
      margin: 0;
      padding: 0;
    }

    margin-block-end: 5px;
  }
</style>