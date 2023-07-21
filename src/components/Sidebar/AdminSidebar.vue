<script setup>
import Accordion from "../ui/Accordion.vue"

const menu = [
  {
    icon: 'bx bx-home',
    title: 'Dashboard', 
    list: [
      {name: 'Main page', url: '/admin/main'},
      {name: 'Crypto', url: '/admin/crypto'},
      {name: 'Blog', url: '/admin/blog'},
      {name: 'Tasks', url: '/admin/task'}
    ]
  },
  {
    icon: 'bx bx-store',
    title: 'Ecommerce', 
    list: [
      {name: 'Lessons', url: '/admin/lessons'},
      {name: 'Orders', url: '/admin/orders'},
      {name: 'Customers', url: '/admin/customers'},
      {name: 'Add Product', url: '/admin/add_product'},
    ]
  },
  {
    icon: 'bx bx-task',
    title: 'Tasks', 
    list: [
      {name: 'Task List', url: '/admin/task_list'},
      {name: 'Create Task', url: '/admin/create_task'},
    ]
  },
  {
    icon: 'bx bxs-user-detail',
    title: 'Contacts', 
    list: [
      {name: 'Users', url: '/admin/users'},
      {name: 'Profile', url: '/admin/profile'},
      {name: 'Create User', url: '/admin/create_user'}
    ]
  },
  {
    icon: 'bx bx-nodepat',
    title: 'Blog', 
    list: [
      {name: 'Blog List', url: '/admin/blog'},
      {name: 'Blog Categories', url: '/admin/blog_category'},
      {name: 'Blog Details', url: '/admin/blog_details'},
      {name: 'Create Blog', url: '/admin/create_blog'}
    ]
  },
  {
    icon: 'bx bx-user-circle',
    title: 'Authentication', 
    list: [
      {name: 'Login', url: '/admin/login'},
      {name: 'Register', url: '/admin/register'},
      {name: 'Reset Password', url: '/admin/reset_password'},
      {name: 'Email Verification', url: '/admin/email_verification'},
      {name: 'Two Step Verification', url: '/admin/two_verivication'}
    ]
  },
  {
    icon: 'bx bx-file',
    title: 'Utility', 
    list: [
      {name: 'FAQs', url: '/admin/faq'},
      {name: 'Pricing', url: '/admin/pricing'},
      {name: 'Error 404', url: '/admin/not_found'},
      {name: 'Error 500', url: '/admin/internal_server_error'}
    ]
  },
]
</script>

<template>
  <aside class="admin-sidebar h-screen sticky top-0 left-0 overflow-y-auto border-r border-gray-200 bg-[#2A3042] py-4">
    <div>
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <!-- <router-link
        to="/admin/main"
        class="py-3 px-4 rounded-lg text-gray-700 bg-[#f8f8f8] hover:bg-[#EAEAEA] mb-2 flex items-center duration-200"
      >
        <i class="bx bxs-grid-alt text-2xl mr-3"></i>
        <p class="text-lg">Home Page</p>
      </router-link> -->
      <!-- <router-link
        to="/admin/users"
        class="py-3 px-4 rounded-lg text-gray-700 bg-[#f8f8f8] hover:bg-[#EAEAEA] mb-2 flex items-center duration-200"
      >
        <i class="bx bxs-user-circle text-2xl mr-3"></i>
        <p class="text-lg">All Users</p>
      </router-link> -->
      <!-- <router-link
        to="/admin/settings"
        class="py-3 px-4 rounded-lg text-gray-700 bg-[#f8f8f8] hover:bg-[#EAEAEA] mb-2 flex items-center duration-200"
      >
        <i class="bx bx-cog text-2xl mr-3"></i>
        <p class="text-lg">Settings</p>
      </router-link> -->
    </div>
  </aside>
</template>

<style scoped>
.router-link-active {
  background-color: #0FB13A;
  color: #fff;
}
</style>
