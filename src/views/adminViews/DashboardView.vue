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
      </div>
    </div>
  </div>
</template>

<style scoped>
.box-container{
  width: calc(100% / 3 - 5px);
}
</style>
