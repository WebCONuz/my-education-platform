<script setup>
import UsersTable from '../../components/Table/UsersTable.vue';
import Breadcrumb from '../../components/ui/Breadcrumb.vue';

const users = [
  {
    id: 1,
    name: "Evan Yu", 
    job: 'Software Engineer', 
    age: 28, 
    roles: ['Author', 'User'], 
    avatar: "https://cdn-icons-png.flaticon.com/512/219/219986.png", 
    address: "China, Hong Kong"
  },
  {
    id: 2,
    name: "Charlie Pirse", 
    job: 'Software Engineer', 
    age: 25, 
    roles: ['User'], 
    avatar: "https://cdn-icons-png.flaticon.com/512/219/219986.png", 
    address: "USA, New York"
  },
  {
    id: 3,
    name: "Muhammad Ali", 
    job: 'Web Developer', 
    age: 32, 
    roles: ['Author'], 
    avatar: "https://cdn-icons-png.flaticon.com/512/219/219986.png", 
    address: "Turkey, Istanbul"
  },
  {
    id: 4,
    name: "Andrey Polkin", 
    job: 'QA Engineer', 
    age: 30, 
    roles: ['User'], 
    avatar: "https://cdn-icons-png.flaticon.com/512/219/219986.png", 
    address: "Russia, Moscow"
  }
]

const admins = [
  {
    id: 1,
    name: "Evan Yu", 
    job: 'Software Engineer', 
    age: 28, 
    avatar: "https://www.iconninja.com/files/864/851/698/admin-icon.png", 
    address: "China, Hong Kong",
    super: true,
  },
  {
    id: 2,
    name: "Charlie Pirse", 
    job: 'Software Engineer', 
    age: 25, 
    roles: ['User'], 
    avatar: "https://cdn-icons-png.flaticon.com/512/219/219986.png", 
    address: "USA, New York",
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
    <UsersTable :admins="admins" :users="users" />
  </div>
</template>

<style></style>
