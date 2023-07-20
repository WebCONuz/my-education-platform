<template>
  <aside class="admin-sidebar border-r border-gray-200 bg-white p-4">
    <div>
      <router-link
        to="/admin/main"
        class="py-3 px-4 rounded-lg text-gray-700 bg-[#f8f8f8] hover:bg-[#EAEAEA] mb-2 flex items-center duration-200"
      >
        <i class="bx bxs-grid-alt text-2xl mr-3"></i>
        <p class="text-lg">Bosh sahifa</p>
      </router-link>
      <router-link
        to="/admin/users"
        class="py-3 px-4 rounded-lg text-gray-700 bg-[#f8f8f8] hover:bg-[#EAEAEA] mb-2 flex items-center duration-200"
      >
        <i class="bx bxs-user-circle text-2xl mr-3"></i>
        <p class="text-lg">All Users</p>
      </router-link>
      <router-link
        to="/admin/settings"
        class="py-3 px-4 rounded-lg text-gray-700 bg-[#f8f8f8] hover:bg-[#EAEAEA] mb-2 flex items-center duration-200"
      >
        <i class="bx bx-cog text-2xl mr-3"></i>
        <p class="text-lg">Sozlamalar</p>
      </router-link>
    </div>
  </aside>
</template>

<style scoped>
.router-link-active {
  background-color: #0FB13A;
  color: #fff;
}
.admin-sidebar {
  height: calc(100vh - 70px);
}
</style>
