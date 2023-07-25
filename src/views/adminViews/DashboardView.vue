<script setup>
import Breadcrumb from '../../components/ui/Breadcrumb.vue';
import CourseCategoryCard from '../../components/ui/cards/CourseCategoryCard.vue';
</script>

<template>
  <div>
    <Breadcrumb title="Dashboard" :data="['Dashboard', 'Main']" />
    
    <div class="flex justify-between">
      <div class="box-container">
        <CourseCategoryCard bgColor="#FEF5D4" textColor="#fec801" />
        <CourseCategoryCard bgColor="#FCECF1" textColor="#F2426D" />
        <CourseCategoryCard bgColor="#D7F3EF" textColor="#58BAAB" />
        <CourseCategoryCard bgColor="#E2F3FC" textColor="#019FF8" />
      </div>
      <div class="box-container">
        <CourseCategoryCard bgColor="#D7F3EF" textColor="#58BAAB" />
        <CourseCategoryCard bgColor="#FEF5D4" textColor="#fec801" />
      </div>
      <div class="box-container">
        <CourseCategoryCard bgColor="#FEF5D4" textColor="#fec801" />
        <CourseCategoryCard bgColor="#D7F3EF" textColor="#58BAAB" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.box-container{
  width: calc(100% / 3 - 10px);
}
</style>
