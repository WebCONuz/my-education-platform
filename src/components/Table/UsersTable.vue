<script setup>
import { Pagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
const props = defineProps({
    admins: Array,
    users: Array
})
</script>

<template>
    <!-- Admins table -->
    <h1 class="text-2xl text-center font-semibold text-green-600 mb-4">Admins</h1>
    <div class="relative overflow-x-auto sm:rounded-lg mb-8">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 bg-[#EAEAEA] dark:bg-[#DEF7EC] dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">ID</th>
                    <th scope="col" class="px-6 py-3">Super Admin</th>
                    <th scope="col" class="px-6 py-3">Avatar</th>
                    <th scope="col" class="px-6 py-3">Fullname</th>
                    <th scope="col" class="px-6 py-3">Job</th>
                    <th scope="col" class="px-6 py-3">Age</th>
                    <th scope="col" class="px-6 py-3">Address</th>
                    <th scope="col" class="px-6 py-3">Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="admin in props.admins" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-[#f8f8f8] dark:hover:bg-[#F2FFF9]">
                    <td class="px-4 py-2">{{ admin.id }}</td>
                    <td class="px-4 py-2">
                        <div v-if="admin.super" class="w-6 h-6 rounded-md bg-green-400"></div>
                        <div v-else class="w-6 h-6 rounded-md bg-orange-400"></div>
                    </td>
                    <td class="px-4 py-2">
                        <img :src="admin.avatar" alt="avatar" class="w-14 h-14 rounded-full object-cover">
                    </td>
                    <td class="px-4 py-2">{{ admin.name }}</td>
                    <td class="px-4 py-2">{{ admin.job }}</td>
                    <td class="px-4 py-2">{{ admin.age }}</td>
                    <td class="px-4 py-2">{{ admin.address }}</td>
                    <td class="px-4 py-2">
                        <i class='bx bxs-edit text-xl text-green-500 mr-2'></i>
                        <i class='bx bx-trash text-xl text-red-500'></i>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- users table -->
    <h1 class="text-2xl text-center font-semibold text-green-600 my-4">Users</h1>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 bg-[#DEF7EC] dark:bg-[#DEF7EC] dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">ID</th>
                    <th scope="col" class="px-6 py-3">Avatar</th>
                    <th scope="col" class="px-6 py-3">User name</th>
                    <th scope="col" class="px-6 py-3">Job</th>
                    <th scope="col" class="px-6 py-3">Age</th>
                    <th scope="col" class="px-6 py-3">Role</th>
                    <th scope="col" class="px-6 py-3">Address</th>
                    <th scope="col" class="px-6 py-3">Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in props.users" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-[#F2FFF9] dark:hover:bg-[#F2FFF9]">
                    <td class="px-4 py-2">{{ user.id }}</td>
                    <td class="px-4 py-2">
                        <img :src="user.avatar" alt="avatar" class="w-12 h-12 rounded-full object-cover">
                    </td>
                    <td class="px-4 py-2">{{ user.name }}</td>
                    <td class="px-4 py-2">{{ user.job }}</td>
                    <td class="px-4 py-2">{{ user.age }}</td>
                    <td class="px-4 py-2">{{ user.roles.join(", ") }}</td>
                    <td class="px-4 py-2">{{ user.address }}</td>
                    <td class="px-4 py-2">
                        <i class='bx bxs-edit text-xl text-green-500 mr-2'></i>
                        <i class='bx bx-trash text-xl text-red-500'></i>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- paginetion -->
    <div class="flex justify-center py-8">
        <Pagination v-model="currentPage" :total-pages="100" show-icons></Pagination>
    </div>
</template>
  
<style></style>
  