<script setup>
const props = defineProps({
    bgColor: String,
    textColor: String,
    data: Object
})
</script>

<template>
    <WrapBox class="course flex items-center cursor-default duration-200">
        <div 
            v-if="!props?.data?.category_image"
            class="w-[50px] h-[50px] flex items-center justify-center text-white text-2xl rounded-md" 
            :style="'background-color:' + props.textColor" 
        >W</div>
        <div 
            v-else
            class="w-[50px] h-[50px] flex items-center justify-center rounded-md" 
            :style="'background-color:' + props.textColor" 
        >
            <img :src="props?.data?.category_image" alt="category image" class="w-8">
        </div>
        <div class="ml-4">
            <h3 class="text-[#191d33]">{{ props.data?.name || 'Web Developing' }}</h3>
            <p class="text-xs text-[#a1a4b5]">{{ (props.data?.course_count || 30) + '+ Courses' }}</p>
        </div>
        <LinkBtn 
            class="ml-auto" 
            :style="'background-color:' + props.bgColor + '; ' + 'color:' + props.textColor + ';'" 
            url="/admin/category/2"
            text="View Courses"
        />
    </WrapBox>
</template>

<style scoped>
.course:hover{
    transform: scale(1.02) translateY(-4px);
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);
}
</style> 