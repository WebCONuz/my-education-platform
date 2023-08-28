<script setup>
import UsersTable from '../../components/Table/UsersTable.vue';
import StatisticCard from '../../components/ui/cards/StatisticCard.vue';
import { users } from "../../data"

const admins = [
  {
    id: 1,
    name: "Evan Yu", 
    job: 'Software Engineer', 
    age: 28, 
    avatar: "https://www.iconninja.com/files/864/851/698/admin-icon.png", 
    phone: "China, Hong Kong",
    super: true,
  },
  {
    id: 2,
    name: "Charlie Pirse", 
    job: 'Software Engineer', 
    age: 25, 
    roles: ['User'], 
    avatar: "https://cdn-icons-png.flaticon.com/512/219/219986.png", 
    phone: "USA, New York",
    super: false,
  },
]
</script>

<template>
  <main class="all_users">
    <Breadcrumb title="Users" :data="['Dashboard', 'Contact', 'Users']" />
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
    <UsersTable :users="users" />
  </main>
</template>

<style></style>
