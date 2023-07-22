<script setup>
import { ref } from 'vue';

const props = defineProps({
    data: Object
})

const open = ref(false);
const openAccordion = () => {
  open.value = !open.value
}
</script>

<template>
    <div class="pt-2 px-4 w-full">
        <div class="clicked w-full flex items-center justify-between mb-2 cursor-pointer hover:bg-[#343A4C] duration-200" @click="openAccordion">
            <div class="flex items-center">
                <i :class="props.data.icon" class="text-xl text-[#6A7187]"></i>
                <p class="ml-3 text-[13px] text-[#959EBB]">{{ props.data.title }}</p>
            </div>
            <i class='bx bx-chevron-down text-xl text-[#959EBB] duration-500' :class="open ? 'rotate-180' : 'rotate-0'"></i>
        </div>
        <ul class="list overflow-hidden transition-all duration-500" :class="open ? 'max-h-[400px]' : 'max-h-0'">
            <li class="py-1 pl-4" v-for="item in props.data.list">
                <router-link :to="item.url" class="text-[#959EBB] text-[13px]">{{ item.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
/* .list, .clicked{
  transition: all 0.5s linear !important;
} */
</style>
