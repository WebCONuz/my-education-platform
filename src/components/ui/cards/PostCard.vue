<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    data: Object
})
</script>

<template>
    <div class="flex gap-x-4 justify-between items-center">
        <img :src="props.data.imgUrl" alt="post-img" class="w-[80px] h-[55px] object-cover">
        <div class="flex-grow">
            <h4 class="text-gray-700 text-[15px] mb-1">{{ props.data.title }}</h4>
            <p class="text-gray-400 text-xs">{{ props.data.date }}</p>
        </div>
        <div class="dots relative flex">
            <i class='bx bx-dots-horizontal-rounded text-lg' ></i>
            <div class="dropdown absolute right-5 top-0 border border-gray-100 shadow-sm flex flex-col bg-white duration-200 overflow-hidden rounded-md">
                <router-link to="/" class="text-gray-500 hover:text-gray-700 px-4 py-[6px] hover:bg-green-50 text-sm w-[120px] duration-200 cursor-pointer">View Post</router-link>
                <p class="text-gray-500 hover:text-gray-700 px-4 py-[6px] hover:bg-green-50 text-sm w-[120px] duration-200 cursor-pointer">Edit Post</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.dropdown{
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
}
.dots:hover .dropdown{
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}
</style>