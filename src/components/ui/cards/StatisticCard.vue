<script setup>
const props = defineProps({
    color: String,
    icon: String,
    text: String,
    num: String
});
</script>

<template>
    <WrapBox class="course mb-4 cursor-default duration-200">
        <h3 class="text-sm text-[#a1a4b5] mb-2">{{ props.text }}</h3>
        <div class="flex items-center justify-between">
            <p class="text-[#191d33] text-3xl">{{ props.num }}</p>
            <i class='text-3xl' :style="'color:' + props.color" :class="props.icon"></i>
        </div>
    </WrapBox>
</template>

<style scoped>
.course:hover{
    transform: scale(1.02) translateY(-4px);
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);
}
</style> 