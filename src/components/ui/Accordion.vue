<script setup>
import { ref } from 'vue';

const open = ref(false);
const openAccordion = () => {
  open.value = !open.value
}
</script>

<template>
    <div class="pt-2 px-4 w-full overflow-hidden" :class="open ? 'h-auto' : 'h-[45px]'">
        <div class="clicked w-full flex items-center justify-between mb-2" @click="openAccordion">
            <div class="flex items-center">
                <i class="bx bx-file text-xl text-[#6A7187]"></i>
                <p class="ml-3 text-[13px] text-[#959EBB]">Utility</p>
            </div>
            <i class='bx bx-chevron-down text-xl text-[#959EBB]'></i>
        </div>
        <ul class="list">
            <li class="py-1 pl-4"><router-link to="/" class="text-[#959EBB] text-[13px]">Vertical-1</router-link></li>
            <li class="py-1 pl-4"><router-link to="/" class="text-[#959EBB] text-[13px]">Vertical-2</router-link></li>
            <li class="py-1 pl-4"><router-link to="/" class="text-[#959EBB] text-[13px]">Vertical-3</router-link></li>
            <li class="py-1 pl-4"><router-link to="/" class="text-[#959EBB] text-[13px]">Vertical-4</router-link></li>
        </ul>
    </div>
</template>

<style scoped>
.list, .clicked{
  transition: all 0.5s linear !important;
}
</style>
