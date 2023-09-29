<script setup>
import RegisterForm from '../../components/Form/RegisterForm.vue';
</script>

<template>
    <main class="registration w-full flex items-center justify-center">
        <RegisterForm class="w-[60%] bg-white border border-gray-300" />
    </main>
</template>


<style scoped>
.registration{
    min-height: calc(100vh - 110px);
}
</style>