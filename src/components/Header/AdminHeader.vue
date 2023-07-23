<template>
  <nav
    class="h-[70px] flex items-center justify-between px-4 bg-white w-4/5 fixed top-0 left-1/5 z-40 shadow-sm"
  >
    <!-- search -->
    <label for="seach-input" class="relative">
      <i class='bx bx-search-alt absolute left-[15px] top-1/2 -translate-y-1/2 text-lg text-[#767A8EE0]'></i>
      <input
        id="seach-input"
        type="text"
        class="h-10 w-[250px] bg-[#F2F2F8] border-0 placeholder:text-[#767a8ee0] placeholder:font-normal text-sm focus:border-none focus:outline-none focus:ring-0 pl-[40px] pr-3 text-[#767A8E] rounded-[35px]"
        placeholder="Search..."
        />
    </label>

    <!-- menu -->
    <ul class="flex items-center">
      <li
        class="w-9 h-9 flex items-center justify-center rounded-lg bg-[#F2F2F8] mr-4"
      >
        <img src="../../assets/images/header/ru.png" alt="ru" />
      </li>
      <li
        class="w-9 h-9 flex items-center justify-center rounded-lg bg-[#F2F2F8] mr-4"
      >
        <i class="bx bxs-moon text-xl text-gray-600"></i>
      </li>
      <li
        class="w-9 h-9 flex items-center justify-center rounded-lg relative bg-[#F2F2F8] mr-4"
      >
        <i class='bx bx-bell text-xl text-gray-600'></i>
        <div class="absolute -right-2 -top-2 w-[18px] h-[18px] text-[10px] text-white bg-[#F46A6A] rounded-full flex items-center justify-center">3</div>
      </li>
      <li class="profile flex items-center relative text-[#767A8E] cursor-pointer">
        <img
          src="../../assets/images/header/admin.webp"
          alt="admin image"
          class="w-9"
        />
        <div class="ml-3 mr-1">
          <p class="text-sm font-bold">Neo Martines</p>
          <p class="text-end text-xs">Super admin</p>
        </div>
        <i class='bx bx-chevron-down text-lg duration-500' />
        <div class="sub-menu absolute right-0 w-[155px] bg-white py-1 rounded-md duration-300">
          <router-link to="/admin/profile" class="flex items-center w-full px-4 text-[#212529] py-2 hover:bg-[#F8F9FA] duration-200">
            <i class='bx bx-user mr-2' ></i>
            <span class="text-sm">Profile</span>
          </router-link>
          <router-link to="/admin/profile" class="flex items-center w-full px-4 text-[#212529] py-2 hover:bg-[#F8F9FA] duration-200">
            <i class='bx bx-wallet mr-2' ></i>
            <span class="text-sm">My Wallet</span>
          </router-link>
          <router-link to="/admin/profile" class="flex items-center w-full px-4 text-[#212529] py-2 hover:bg-[#F8F9FA] duration-200">
            <i class='bx bx-wrench mr-2' ></i>
            <span class="text-sm">Setting</span>
          </router-link>
          <router-link to="/admin/profile" class="flex items-center w-full px-4 text-[#212529] py-2 hover:bg-[#F8F9FA] duration-200">
            <i class='bx bx-lock-open mr-2' ></i>
            <span class="text-sm">Lock Screen</span>
          </router-link>
          <router-link to="/admin/profile" class="flex items-center w-full px-4 text-[#F46A6A] py-3 border-t border-gray-100 mt-1 hover:bg-[#F8F9FA] duration-200">
            <i class='bx bx-power-off mr-2'></i>
            <span class="text-sm">Logout</span>
          </router-link>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style>
@keyframes shakeBell {
  0%{
    transform: rotate(0deg);
  }
  25%{
    transform: rotate(-15deg);
  }
  50%{
    transform: rotate(0deg);
  }
  75%{
    transform: rotate(15deg);
  }
  100%{
    transform: rotate(0deg);
  }
}

.bx-bell{
  animation-name: shakeBell;
  animation-timing-function: ease-in-out;
  animation-duration: 0.3s;
  animation-iteration-count: infinite;
  animation-timeline: 2s;
}

.profile:hover .sub-menu{
  opacity: 1;
  visibility: visible;
  top: 44px;
}
.sub-menu{
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  opacity: 0;
  visibility: hidden;
  top: 54px;
}
</style>
