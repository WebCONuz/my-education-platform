<script setup>
</script>

<template>
    <div class="p-8 rounded-lg">
        <form action="#" class="block w-full">
            <div class="form-item mb-3">
                <label for="userName" class="">Full name</label>
                <input type="text" id="userName" class="mt-2 mb-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full">
                <p class="text-sm text-red-500">name is required</p>
            </div>
            <div class="form-item mb-3">
                <label for="userEmail" class="">Email</label>
                <input type="email" id="userEmail" class="mt-2 mb-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full">
                <p class="text-sm text-red-500">email is required</p>
            </div>
            <div class="form-item mb-5">
                <label for="userPassword" class="">Password</label>
                <input type="password" id="userPassword" class="mt-2 mb-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full">
                <p class="text-sm text-red-500">password is required</p>
            </div>
            <div class="flex">
                <input type="reset"  class="py-2 px-4 bg-blue-500 text-white rounded mr-2 text-sm" value="Tozalash">
                <input type="submit"  class="py-2 px-4 bg-green-500 text-white rounded text-sm" value="Jo'natish">
            </div>
        </form>
    </div>
</template>


<style scoped>

</style>