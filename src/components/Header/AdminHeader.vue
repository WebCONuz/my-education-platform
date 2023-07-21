<template>
  <nav
    class="h-[70px] flex items-center justify-between px-8 bg-white border-b border-gray-200 sticky top-0 left-0"
  >
    <router-link to="/admin/main" class="flex items-center">
      <img
        src="../../assets/images/header/logo-removebg-preview.png"
        alt="logo"
        class="w-[50px]"
      />
      <h2 class="text-xl text-[#0FB13A] ml-2 font-bold uppercase">The Future</h2>
    </router-link>

    <ul class="flex items-center">
      <!-- <li>
        <input
          type="text"
          class="h-10 w-[300px] border outline-none focus:outline-none px-3 text-gray-700 rounded-lg border-green-200 mr-3"
        />
      </li> -->
      <li
        class="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100"
      >
        <i class="bx bxs-moon text-xl text-green-600"></i>
      </li>
      <li
        class="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 mx-3"
      >
        <img src="../../assets/images/header/ru.png" alt="ru" />
      </li>
      <li class="flex items-end">
        <img
          src="../../assets/images/header/admin.webp"
          alt="admin image"
          class="w-10"
        />
      </li>
    </ul>
  </nav>
</template>

<style></style>
