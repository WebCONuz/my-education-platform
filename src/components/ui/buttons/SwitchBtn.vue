<script setup>
import { ref } from 'vue';
const props = defineProps({
    switch: Boolean
})
const switchOn = ref(props.switch);
function onToSwitch(){
    switchOn.value = !switchOn.value
}
</script>

<template>
    <div @click="onToSwitch" class="relative w-[45px] h-6 rounded-[20px] duration-200" :class="switchOn ? 'bg-green-400' : 'bg-[#CBD5E1]'">
        <div 
            class="absolute top-[2px] h-[20px] w-[20px] bg-white rounded-full duration-200"
            :class="switchOn ? 'left-[23px]' : 'left-[2px]'"
        ></div>
    </div>
</template>

<style scoped></style>