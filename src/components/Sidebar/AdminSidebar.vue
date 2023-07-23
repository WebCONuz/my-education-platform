<script setup>
import AsideAccordion from "../ui/AsideAccordion.vue";
import { menu } from "../../data";
</script>

<template>
  <aside class="admin-sidebar h-screen sticky top-0 left-0 overflow-y-auto bg-[#2A3042] py-4">
    <!-- logo -->
    <router-link to="/admin/main" class="text-xl px-4 pt-1 pb-4 uppercase flex w-full items-center">
      <i class='bx bxl-audible text-5xl text-white mr-2'></i>
      <span class="font-bold text-[#959EBB]">The Future</span>
    </router-link>

    <!-- menu -->
    <p class="px-4 text-[#6A7187] text-[12px] uppercase font-semibold">Menu</p>
    <AsideAccordion v-for="item in menu" :data="item" />
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
