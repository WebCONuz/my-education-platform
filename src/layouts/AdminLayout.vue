<script setup>
import AdminSidebar from "../components/Sidebar/AdminSidebar.vue";
import AdminHeader from "../components/Header/AdminHeader.vue";
import AdminFooter from "../components/Footer/AdminFooter.vue";
</script>

<template>
  <main id="user-layout" class="flex">
    <AdminSidebar class="w-1/5" />
    <main class="user-main w-4/5 overflow-x-hidden overflow-y-auto">
      <AdminHeader />
      <div class="content px-4 pb-4 pt-[86px]">
        <router-view></router-view>
      </div>
      <AdminFooter />
    </main>
  </main>
</template>

<style scoped>
.user-main .content {
  min-height: calc(100vh - 40px);
}
</style>
