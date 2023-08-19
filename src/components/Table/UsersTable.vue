<script setup>
import { Pagination } from 'flowbite-vue'
import { ref } from 'vue'

const currentPage = ref(1)
const props = defineProps({
    users: Array
})
</script>

<template>
    <!-- title -->
    <div class="mt-2 mb-4 flex items-center justify-between">
        <h1 class="text-xl font-semibold text-slate-600">Users</h1>
        <label class="search flex items-center mr-2">
            <input 
                type="text" 
                class="w-[300px] py-2 pr-10 pl-3 font-normal text-gray-600 placeholder:text-gray-300 border border-gray-100 focus:border-gray-300 outline-none rounded-md shadow focus:ring-0"
                placeholder="Search..."    
            >
            <i class='bx bx-search text-2xl text-gray-300 -ml-[33px] mt-[2px] relative z-10'></i>
        </label>
    </div>

    <!-- table -->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-sm text-gray-700 bg-[#E2E8F0] dark:bg-[#DEF7EC] dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3 uppercase font-semibold">ID</th>
                    <th scope="col" class="px-6 py-3 uppercase font-semibold">Avatar</th>
                    <th scope="col" class="px-6 py-3 uppercase font-semibold">Name</th>
                    <th scope="col" class="px-6 py-3 uppercase font-semibold">Age</th>
                    <th scope="col" class="px-6 py-3 uppercase font-semibold">Phone</th>
                    <th scope="col" class="px-6 py-3 uppercase font-semibold">Role</th>
                    <th scope="col" class="px-6 py-3 uppercase font-semibold">Status</th>
                    <th scope="col" class="px-6 py-3 uppercase font-semibold">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="user in props.users" 
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-100"
                    :key="user.id + 'JJDF'"
                >
                    <td class="px-4 py-[10px]">{{ user.id }}</td>
                    <td class="px-4 py-[10px]">
                        <img :src="user.avatar" alt="avatar" class="w-11 h-11 rounded-full object-cover">
                    </td>
                    <td class="px-4 py-[10px]">{{ user.name }}</td>
                    <td class="px-4 py-[10px]">{{ user.age }}</td>
                    <td class="px-4 py-[10px]">{{ user.phone }}</td>
                    <td class="px-4 py-[10px]">
                        <span 
                            class="inline-block capitalize py-1 px-2 rounded-[20px] text-xs" 
                            :class="user.role === 'user' ? 'text-cyan-500 bg-cyan-100' : 'text-pink-500 bg-pink-100'"
                        >{{ user.role }}</span>
                    </td>
                    <td class="px-4 py-[10px]">
                        <SwitchBtn />
                    </td>
                    <td class="px-4 py-[10px]">
                        <i class='bx bx-show-alt text-xl text-cyan-500'></i>
                        <i class='bx bxs-edit text-xl text-green-400 mx-3'></i>
                        <i class='bx bx-trash text-xl text-red-400'></i>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- paginetion -->
    <div class="flex justify-center py-6">
        <Pagination v-model="currentPage" :total-pages="100" show-icons></Pagination>
    </div>
</template>
  
<style></style>
  