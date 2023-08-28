<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    data: Object
})

const open = ref(false);
const openAccordion = () => {
  open.value = !open.value
}
</script>

<template>
    <div v-if="props.data?.list" class="pt-2">
        <div 
            class="px-4 py-1 mb-1 w-full flex items-center justify-between cursor-pointer hover:bg-[#343A4C] hover:text-white duration-200" 
            :class="open ? 'text-white' : 'text-[#959EBB]'" 
            @click="openAccordion"
        >
            <div class="flex items-center">
                <i :class="props.data.icon" class="text-xl"></i>
                <p class="ml-3 text-[13px]">{{ props.data.title }}</p>
            </div>
            <i class='bx bx-chevron-down text-base duration-500' :class="open ? 'rotate-180' : 'rotate-0'"></i>
        </div>
        <ul class="px-4 overflow-hidden transition-all duration-500" :class="open ? 'max-h-[400px]' : 'max-h-0'">
            <li 
                class="py-1 pl-4 hover:bg-[#343A4C] text-[#959EBB] hover:text-white duration-200" 
                v-for="item in props.data.list"
            >
                <i class='bx bx-radio-circle text-[10px] mr-2'></i>
                <router-link :to="item.url" class="text-[13px]">{{ item.name }}</router-link>
            </li>
        </ul>
    </div>
    <div v-else class="pt-2">
        <router-link
            :to="props.data.url"
            class="px-4 py-1 w-full flex items-center justify-between mb-2 cursor-pointer hover:bg-[#343A4C] text-[#6A7187] hover:text-white duration-200" 
        >
            <div class="flex items-center">
                <i :class="props.data.icon" class="text-xl"></i>
                <p class="ml-3 text-[13px]">{{ props.data.title }}</p>
            </div>
        </router-link>
    </div>
</template>

<style scoped>
.router-link-active {
  color: #fff;
}
</style>
