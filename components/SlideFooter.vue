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
  <footer class="absolute bottom-0 left-0 w-full bg-slate-800">
    <hr class="border-slate-900" />

    <div
      class="flex gap-2 justify-end items-center px-2 py-1 text-2 text-slate-200"
    >
      <div class="w-full flex items-center gap-2">
        <img src="/logos/studiob04.svg" alt="" class="w-4" />
        <span>StudioB04</span>
        <small>|</small>
        <span>Développeur Web {{ projectTitle ? ` - ${projectTitle}` : ""}}</span>
        <small>|</small>
        <span>{{ day }} {{ date }} {{ month }} {{ year }} </span>
        <span class="mis-auto">
          Diapo <SlideCurrentNo /> sur <SlidesTotal />
        </span>
      </div>
    </div>
  </footer>
</template>
