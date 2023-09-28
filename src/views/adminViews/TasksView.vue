<script setup>
import { ref } from 'vue'
import { Pagination } from 'flowbite-vue'
import MainTable from "../../components/Table/MainTable.vue";
import MainTableTitle from "../../components/ui/titles/MainTableTitle.vue";
import { tasks, tableHeader } from "../../data"
const currentPage = ref(1)
</script>

<template>
    <main class="tasks">
        <Breadcrumb title="Tasks" :data="['Dashboard', 'Tasks']" />
        <!-- title of table -->
        <MainTableTitle class="mt-2 mb-4" title="Task for 22.09.2023" />
        <!-- tasks table -->
        <MainTable :data="tasks" :headers="tableHeader">
            <template #td_status="{item}">
                <span 
                    class="inline-block capitalize py-1 px-2 rounded-[20px] text-xs" 
                    :class="item.status === 'waiting' ? 'text-cyan-500 bg-cyan-100' : 'text-pink-500 bg-pink-100'"
                >{{ item.status }}</span>
            </template>
            <template #td_actions="{item}">
                <div class="flex">
                    <i class='bx bx-show-alt text-xl text-cyan-500' title="view"></i>
                    <i class='bx bxs-edit text-xl text-green-400 mx-3' title="update"></i>
                    <i class='bx bx-trash text-xl text-red-400' title="delete"></i>
                </div>
            </template>
        </MainTable>
        <!-- paginetion -->
        <div class="flex justify-center py-6">
            <Pagination v-model="currentPage" :total-pages="100" show-icons></Pagination>
        </div>
    </main>
</template>

<style scoped></style>