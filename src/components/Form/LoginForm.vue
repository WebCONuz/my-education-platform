<script setup>
</script>

<template>
    <div class="p-8 rounded-lg">
        <div class="title py-2 px-4 bg-blue-100 flex items-center mb-4 rounded-lg">
            <i class='bx bxs-user-circle text-[40px] text-gray-600 mr-3'></i>
            <div class="text-gray-600">
                <h1 class="text-xl font-semibold mb-1">Login</h1>
                <p class="text-sm">Please enter your data to login.</p>
            </div>
        </div>
        <form action="#" class="block w-full">
            <div class="form-item mb-3">
                <label for="userEmail" class="text-sm text-gray-700 font-semibold">Username</label>
                <input 
                    type="email" 
                    id="userEmail" 
                    class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full"
                    placeholder="example@gmail.com"
                    
                />
                <p class="text-xs text-gray-500">Your unique username to app</p>
            </div>
            <div class="form-item mb-5">
                <label for="userPassword" class="text-sm text-gray-700 font-semibold">Password</label>
                <input 
                    type="password" 
                    id="userPassword" 
                    class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full"
                    placeholder="******"
                />
                <p class="text-xs text-gray-500">Your strong password</p>
            </div>
            <div class="flex justify-between items-center">
                <div>
                    <input type="reset"  class="py-2 px-4 bg-blue-500 text-white rounded mr-2 text-sm" value="Reset">
                    <input type="submit"  class="py-2 px-4 bg-green-500 text-white rounded text-sm" value="Login">
                </div>
                <router-link to="/admin/register" class="text-blue-500">Register now</router-link>
            </div>
        </form>
    </div>
</template>


<style scoped>

</style>