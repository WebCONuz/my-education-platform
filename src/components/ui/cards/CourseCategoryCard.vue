<script setup>
import WrapBox from '../WrapBox.vue';
import LinkBtn from '../buttons/LinkBtn.vue';
const props = defineProps({
    bgColor: String,
    textColor: String
})
</script>

<template>
    <WrapBox class="flex items-center">
        <div 
            class="w-[50px] h-[50px] flex items-center justify-center text-white text-2xl rounded-md" 
            :class="'bg-[' + props.textColor + ']'" 
        >W</div>
        <div class="ml-4">
            <h3 class="text-[#191d33]">Web Developing</h3>
            <p class="text-xs text-[#a1a4b5]">30+ Courses</p>
        </div>
        <LinkBtn 
            class="ml-auto" 
            :class="'bg-[' + props.bgColor + ']' + ' ' + 'text-[' + props.textColor + ']'" 
            url="/admin/category/2"
            text="View Courses"
        />
    </WrapBox>
</template>

<style scoped></style> 