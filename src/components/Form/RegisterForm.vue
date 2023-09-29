<script setup>
</script>

<template>
    <div class="p-8 rounded-lg box-shadow">
        <div class="title py-3 px-4 bg-blue-100 flex items-center mb-4 rounded-lg">
            <i class='bx bx-lock-open-alt text-[40px] text-gray-600 mr-3'></i>
            <div class="text-gray-700">
                <h1 class="text-xl font-semibold mb-1">Register</h1>
                <p class="text-sm">Please enter your data to register.</p>
            </div>
        </div>
        <form action="#" class="block w-full">
            <div class="flex items-start gap-4">
                <div class="form-item w-1/2 mb-3">
                    <label for="firstname" class="text-sm text-gray-700 font-semibold">First Name</label>
                    <input type="text" id="firstname" class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full">
                    <p class="text-xs text-gray-500">first name is required</p>
                </div>
                <div class="form-item w-1/2 mb-3">
                    <label for="lastname" class="text-sm text-gray-700 font-semibold">Last Name</label>
                    <input type="text" id="lastname" class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full">
                    <p class="text-xs text-gray-500">last name is required</p>
                </div>
            </div>
            <!-- <div class="flex items-start gap-4">                
                <div class="form-item mb-3 w-1/2">
                    <label for="age" class="">Age</label>
                    <input type="number" id="age" class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full">
                    <p class="text-sm text-gray-500">age is required</p>
                </div>
                <div class="form-item mb-3 w-1/2">
                    <label for="job" class="">Job</label>
                    <input type="text" id="job" class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full">
                    <p class="text-sm text-gray-500">job is required</p>
                </div>
            </div> -->
            <div class="form-item mb-3">
                <label for="role" class="text-sm text-gray-700 font-semibold">Role</label>
                <select id="role" class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full">
                    <option value="user">User</option>
                    <option value="author">Author</option>
                    <option value="teacher">Teacher</option>
                </select>
                <p class="text-xs text-gray-500">role is required</p>
            </div>
            <div class="form-item mb-3">
                <label for="userEmail" class="text-sm text-gray-700 font-semibold">Email</label>
                <input type="email" id="userEmail" class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full">
                <p class="text-xs text-gray-500">email is required</p>
            </div>
            <div class="form-item mb-5">
                <label for="userPassword" class="text-sm text-gray-700 font-semibold">Password</label>
                <input type="password" id="userPassword" class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full">
                <p class="text-xs text-gray-500">password is required</p>
            </div>
            <div class="flex justify-between items-center">
                <div>
                    <input type="reset"  class="py-2 px-4 bg-blue-500 text-white rounded mr-2 text-sm" value="Reset">
                    <input type="submit"  class="py-2 px-4 bg-green-500 text-white rounded text-sm" value="Register">
                </div>
                <router-link to="/admin/login" class="text-blue-500">Login user</router-link>
            </div>
        </form>
    </div>
</template>


<style scoped>

</style>