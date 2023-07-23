<script setup>
import AsideAccordion from "../ui/AsideAccordion.vue";
import { menu } from "../../data";
</script>

<template>
  <aside class="admin-sidebar h-screen sticky top-0 left-0 overflow-y-auto bg-[#2A3042] py-4">
    <div>
      <AsideAccordion v-for="item in menu" :data="item" />
    </div>
  </aside>
</template>

<style scoped>
.admin-sidebar::-webkit-scrollbar {
  width: 6px;
}
.admin-sidebar::-webkit-scrollbar-track{
  background-color: #2A3042;
}
.admin-sidebar::-webkit-scrollbar-thumb {
  background: #4b5677;
  border-radius: 15px;
}
</style>
