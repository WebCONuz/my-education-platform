<script setup>
import AdminSidebar from "../components/Sidebar/AdminSidebar.vue";
import AdminHeader from "../components/Header/AdminHeader.vue";
</script>

<template>
  <main id="user-layout">
    <AdminHeader />
    <div class="flex">
      <AdminSidebar class="w-1/5" />
      <main class="user-main px-4 w-4/5 overflow-x-hidden overflow-y-auto p-4">
        <router-view></router-view>
      </main>
    </div>
  </main>
</template>

<style scoped>
.user-main {
  height: calc(100vh - 70px);
}
</style>
