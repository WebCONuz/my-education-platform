<script setup>
import LoginForm from '../../components/Form/LoginForm.vue';
</script>

<template>
    <main class="login w-full flex items-center justify-center">
        <LoginForm class="w-[50%] bg-white border border-gray-300" />
    </main>
</template>


<style scoped>
.login{
    min-height: calc(100vh - 110px);
}
</style>