<script setup>
const props = defineProps({
    image: String
})
</script>

<template>
    <WrapBox class="course flex items-center cursor-default duration-200">
        <img :src="props.image" alt="instructor" class="w-[50px] h-[50px] rounded-full">
        <div class="ml-4">
            <h3 class="text-[#191d33]">Nil Yeager</h3>
            <p class="text-xs text-[#a1a4b5]">5 Design Course</p>
        </div>
        <LinkBtn 
            class="ml-auto bg-[#F0F3F6] hover:bg-[#d0dae3] hover:shadow-lg text-[#191d33] duration-200" 
            url="/admin/courses/2"
            text="Courses"
        />
    </WrapBox>
</template>

<style scoped>
.course:hover{
    transform: scale(1.02) translateY(-4px);
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);
}
</style> 