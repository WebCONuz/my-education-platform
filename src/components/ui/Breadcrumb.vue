<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    data: Array
})
</script>

<template>
    <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg uppercase text-[#495057] font-semibold">{{ props.title }}</h2>
        <div class="flex items-center">
            <p class="text-sm text-[#74788d] font-normal flex items-center" v-for="item in props.data">
                <span v-if="item !== props.data[props.data.length - 1]"> {{ item }} <i class='bx bx-chevron-right'></i>&nbsp;</span>
                <span v-else>{{ item }}</span>
            </p>
        </div>
    </div>
</template>

<style scoped></style>
