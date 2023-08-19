<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    link: String
});
</script>

<template>
    <div class="flex items-center justify-between text-gray-500 px-2 mb-2">
        <h3 class="tex-sm">{{ props.title }}</h3>
        <i v-if="props.link" class='bx bx-dots-horizontal-rounded text-xl' title="view all"></i>
    </div>
</template>

<style></style>