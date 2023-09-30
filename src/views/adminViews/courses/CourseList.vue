<script setup>
import { ref } from 'vue'
import { Pagination } from 'flowbite-vue'
import MainTable from '../../../components/Table/MainTable.vue';
import { courses, course_headers } from "../../../data";
import MainTableTitle from '../../../components/ui/titles/MainTableTitle.vue';
const currentPage = ref(1)
</script>

<template>
  <main class="courses_list">
    <Breadcrumb title="List View" :data="['Dashboard', 'Courses', 'List View']" />

    <!-- header of table -->
    <MainTableTitle class="mt-2 mb-4" title="Instructors List" />
    
    <!-- users table -->
    <MainTable :data="courses" :headers="course_headers">
      <template #td_checked="{item}">
        <input type="checkbox" class="w-6 h-6 rounded-md border-gray-300 outline-none ring-0 focus:ring-0">
      </template>
      <template #td_name="{item}">
        <div class="flex items-center">
            <img :src="item.image" alt="avatar" class="w-5 mr-3">
            <router-link :to="'/courses/' + item.id" class="text-blue-500">{{ item.name }}</router-link>
        </div>
      </template>
      <template #td_raiting="{item}">
        <div class="flex items-center">
            <i class='bx bxs-star text-lg text-yellow-300 mr-1'></i>
            <span>{{ item.raiting }}</span>
        </div>
      </template>
      <template #td_cost="{item}">
        <span v-if="item.isFree" class="flex items-center">0</span>
        <span v-else>{{ item.cost }}</span>
      </template>
      <template #td_status="{item}">
        <div class="w-12 text-center py-[2px] text-xs rounded-md" :class="item.status === 'open' ? 'bg-green-100 text-green-500' : 'bg-pink-100 text-pink-500'">{{ item.status }}</div>
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

<style></style>
