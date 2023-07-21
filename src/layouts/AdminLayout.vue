<script setup>
import AdminSidebar from "../components/Sidebar/AdminSidebar.vue";
import AdminHeader from "../components/Header/AdminHeader.vue";
</script>

<template>
  <main id="user-layout" class="flex">
    <AdminSidebar class="w-1/5" />
    <main class="user-main w-4/5 overflow-x-hidden overflow-y-auto">
      <AdminHeader />
      <div class="p-4">
        <router-view></router-view>
      </div>
    </main>
  </main>
</template>

<style scoped>
</style>
