<script setup>
import { ref } from 'vue';
const switchOn = ref(false)
function onToSwitch(){
    switchOn.value = !switchOn.value
}
</script>

<template>
    <div @click="onToSwitch" class="relative w-[45px] h-6 rounded-[20px] duration-200" :class="switchOn ? 'bg-violet-700' : 'bg-[#CBD5E1]'">
        <div 
            class="absolute top-[2px] h-[20px] w-[20px] bg-white rounded-full duration-200"
            :class="switchOn ? 'left-[22px]' : 'left-[2px]'"
        ></div>
    </div>
</template>

<style scoped></style>