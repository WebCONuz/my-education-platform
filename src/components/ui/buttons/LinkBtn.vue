<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    url: String,
    text: String
})
</script>

<template>
    <router-link 
        :to="props.url" 
        class="px-2 py-1 rounded-md text-xs cursor-pointer"
    >
        {{ props.text }}
    </router-link>
</template>

<style scoped></style>