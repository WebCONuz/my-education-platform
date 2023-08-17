<script setup>
import UsersTable from '../../components/Table/UsersTable.vue';
import Breadcrumb from '../../components/ui/Breadcrumb.vue';
import StatisticCard from '../../components/ui/cards/StatisticCard.vue';

const users = [
  {
    id: 1,
    name: "Evan Yu", 
    job: 'Software Engineer', 
    age: 28, 
    role: 'author', 
    avatar: "/images/users/user1.jpg", 
    phone: "+99 899 550 50 50"
  },
  {
    id: 2,
    name: "Charlie Pirse", 
    job: 'Software Engineer', 
    age: 25, 
    role: 'user', 
    avatar: "/images/users/user2.jpg", 
    phone: "+99 899 550 50 50"
  },
  {
    id: 3,
    name: "Muhammad Ali", 
    job: 'Web Developer', 
    age: 32, 
    role: 'author', 
    avatar: "/images/users/user3.jpg", 
    phone: "+99 899 550 50 50"
  },
  {
    id: 4,
    name: "Andrey Polkin", 
    job: 'QA Engineer', 
    age: 30, 
    role: 'user', 
    avatar: "/images/users/user4.jpg", 
    phone: "+99 899 550 50 50"
  }
]

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
  <div>
    <!-- <ul>
      <li>Filter, slect & sort by, search</li>
      <li>All users Table</li>
      <li>pagination</li>
    </ul> -->
    <Breadcrumb title="Dashboard" :data="['Dashboard', 'Contact', 'Users']" />
    <div class="flex justify-between mt-4">
      <div class="box-container">
        <StatisticCard color="#fec801" text="Courses In Progress" icon="bx bx-bar-chart-square" num="32" />
      </div>
      <div class="box-container">
        <StatisticCard color="#019FF8" text="Completed Courses" icon="bx bx-badge-check" num="14" />
      </div>
      <div class="box-container">
        <StatisticCard color="#58BAAB" text="Earning Points" icon="bx bx-up-arrow-circle" num="8" />
      </div>
    </div>
    <UsersTable :admins="admins" :users="users" />
  </div>
</template>

<style></style>
