<script setup>
import { ref } from 'vue'
import { Pagination } from 'flowbite-vue'
import MainTable from '../../components/Table/MainTable.vue';
import StatisticCard from '../../components/ui/cards/StatisticCard.vue';
import { users, headers } from "../../data";
import MainTableTitle from '../../components/ui/titles/MainTableTitle.vue'
const currentPage = ref(1)
</script>

<template>
  <main class="all_users">
    <Breadcrumb title="Users" :data="['Dashboard', 'Contact', 'Users']" />

    <!-- statistic cards -->
    <div class="flex justify-between mt-4 mb-4">
      <div class="box-container">
        <StatisticCard color="#fec801" text="All students" icon="bx bx-bar-chart-square" num="561" />
      </div>
      <div class="box-container">
        <StatisticCard color="#019FF8" text="Pending Users" icon="bx bxs-hourglass" num="83" /> <i class=''></i>
      </div>
      <div class="box-container">
        <StatisticCard color="#58BAAB" text="Paid Users" icon="bx bx-badge-check" num="124" />
      </div>
    </div>

    <!-- header of table -->
    <MainTableTitle class="mt-2 mb-4" title="users" />
    
    <!-- users table -->
    <MainTable :data="users" :headers="headers">
      <template #td_avatar="{item}">
        <img :src="item.avatar" alt="avatar" class="w-11 h-11 rounded-full object-cover">
      </template>
      <template #td_status="{item}">
        <SwitchBtn :switch="item.status" />
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
