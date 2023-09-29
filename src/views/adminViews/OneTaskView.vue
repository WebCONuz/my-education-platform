<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
    <main class="one-task">
        <Breadcrumb title="One tasks" :data="['Dashboard', 'Tasks', 'Task-' + route.params.id]" />
        
    </main>
</template>

<style scoped>

</style>