<script setup></script>

<template>
  <main class="settings">
    <Breadcrumb title="Users" :data="['Dashboard', 'Settings']" />
    <div class="box-container">
      <WrapBox>
        <p class="mb-2">Create Banner:</p>
        <div class="flex flex-col items-center">
          <div class="w-full h-[220px] rounded-lg mb-4 border-2 border-dashed flex items-center justify-center text-gray-300 text-2xl font-semibold">275x140 px</div>
          <button class="py-2 px-[14px] rounded-lg bg-[#58BAAB] text-white font-semibold text-sm">+ Create file</button>
        </div>
      </WrapBox>
    </div>
    <div class="flex justify-between mt-4 mb-4">
      <div class="box-container">
        <WrapBox class="flex flex-col items-center">
          <img src="/images/banner/banner2.png" alt="banner" class="w-full h-[220px] rounded-lg mb-4 object-cover">
          <div class="flex w-full justify-center">
            <button class="py-2 px-[14px] rounded-lg text-red-400 border font-semibold text-sm mr-4">Delete</button>
            <button class="py-2 px-[14px] rounded-lg bg-[#58BAAB] text-white font-semibold text-sm">Update file</button>
          </div>
        </WrapBox>
      </div>
      <div class="box-container">
        <WrapBox class="flex flex-col items-center">
          <img src="/images/banner/banner1.png" alt="banner" class="w-full h-[220px] rounded-lg mb-4 object-cover">
          <div class="flex w-full justify-center">
            <button class="py-2 px-[14px] rounded-lg text-red-400 border font-semibold text-sm mr-4">Delete</button>
            <button class="py-2 px-[14px] rounded-lg bg-[#58BAAB] text-white font-semibold text-sm">Update file</button>
          </div>
        </WrapBox>
      </div>
      <div class="box-container">
        <WrapBox class="flex flex-col items-center">
          <img src="/images/banner/banner2.png" alt="banner" class="w-full h-[220px] rounded-lg mb-4 object-cover">
          <div class="flex w-full justify-center">
            <button class="py-2 px-[14px] rounded-lg text-red-400 border font-semibold text-sm mr-4">Delete</button>
            <button class="py-2 px-[14px] rounded-lg bg-[#58BAAB] text-white font-semibold text-sm">Update file</button>
          </div>
        </WrapBox>
      </div>
    </div>
  </main>
</template>

<style></style>
