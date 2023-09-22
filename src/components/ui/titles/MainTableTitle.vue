<script setup>
const props = defineProps({
    title: String
});
</script>

<template>
    <div class="flex items-center justify-between">
        <h1 class="text-xl font-semibold text-slate-600 capitalize">{{ props.title }}</h1>
        <label class="search flex items-center mr-2">
            <input 
                type="text" 
                class="w-[300px] py-2 pr-10 pl-3 font-normal text-gray-600 placeholder:text-gray-300 border border-gray-100 focus:border-gray-300 outline-none rounded-md shadow focus:ring-0"
                placeholder="Search..."    
            >
            <i class='bx bx-search text-2xl text-gray-300 -ml-[33px] mt-[2px] relative z-10'></i>
        </label>
    </div>
</template>

<style></style>