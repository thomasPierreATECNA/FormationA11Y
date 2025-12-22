<script>
import { title as projectTitle } from "./../package.json";

const today = new Date();

const day = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
][today.getDay()];

const date = ("0" + today.getDate()).slice(-2);

const month = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
][today.getMonth()];

const year = today.getFullYear();
</script>

<template>
  <footer
    class="absolute border-t-1 border-grey-600 bottom-0 inset-inline-0 bg-grey-800 flex gap-xs justify-end items-center px-2 py-1 text-2 text-white">
    <img src="/atecna/logo-full-white.svg" alt="" class="h-4" />
    <span>|</span>
    <span>{{ projectTitle ?? "Formation" }}</span>
    <span>|</span>
    <span>{{ day }} {{ date }} {{ month }} {{ year }} </span>
    <span class="mis-auto">
      <SlideCurrentNo /> /
      <SlidesTotal />
    </span>
  </footer>
</template>
