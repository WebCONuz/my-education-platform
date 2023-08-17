<script setup>
import Breadcrumb from '../../components/ui/Breadcrumb.vue';
import CourseCategoryCard from '../../components/ui/cards/CourseCategoryCard.vue';
import CourseInstructorCard from '../../components/ui/cards/CourseInstructorCard.vue';
import StatisticCard from '../../components/ui/cards/StatisticCard.vue';

import AvatarImg from '/images/card/avatar.png';
</script>

<template>
  <div>
    <Breadcrumb title="Dashboard" :data="['Dashboard', 'Main']" />
    
    <!-- 1 -->
    <div class="flex justify-between">
      <div class="box-container">
        <CourseCategoryCard bgColor="#FEF5D4" textColor="#fec801" />
        <CourseCategoryCard bgColor="#E2F3FC" textColor="#019FF8" />
        <CourseCategoryCard bgColor="#FCECF1" textColor="#F2426D" />
        <CourseCategoryCard bgColor="#D7F3EF" textColor="#58BAAB" />
      </div>
      <div class="box-container">
        <StatisticCard color="#fec801" text="Courses In Progress" icon="bx bx-bar-chart-square" num="32" />
        <StatisticCard color="#019FF8" text="Completed Courses" icon="bx bx-badge-check" num="14" />
        <StatisticCard color="#F2426D" text="Watching Time" icon="bx bx-video" num="214h 21m" />
        <StatisticCard color="#58BAAB" text="Earning Points" icon="bx bx-up-arrow-circle" num="8" />
      </div>
      <div class="box-container">
        <CourseInstructorCard :image="AvatarImg" />
        <CourseInstructorCard :image="AvatarImg" />
        <CourseInstructorCard :image="AvatarImg" />
        <CourseInstructorCard :image="AvatarImg" />
      </div>
    </div>

    <!-- 2 -->
    <!-- <div class="flex justify-between">
      <div class="box-container">
      </div>
      <div class="box-container">
      </div>
      <div class="box-container">
      </div>
    </div> -->
  </div>
</template>

<style>
.box-container{
  width: calc(100% / 3 - 10px);
}
</style>
