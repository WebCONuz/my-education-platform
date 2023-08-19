<script setup>
import CourseCategoryCard from '../../components/ui/cards/CourseCategoryCard.vue';
import CourseInstructorCard from '../../components/ui/cards/CourseInstructorCard.vue';
import StatisticCard from '../../components/ui/cards/StatisticCard.vue';
import PieChart from '../../components/ui/charts/PieChart.vue';
import LineChart from '../../components/ui/charts/LineChart.vue';
import WrapBoxTitle from '../../components/ui/titles/WrapBoxTitle.vue';

import AvatarImg from '/images/card/avatar.png';

// chart data
const pieChartData = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
];
</script>

<template>
  <div>
    <Breadcrumb title="Dashboard" :data="['Dashboard', 'Main']" />
    <div class="grid grid-cols-3 gap-5 items-stretch">
      <!-- 1 -->
      <div class="flex flex-col justify-between">
        <WrapBoxTitle title="Popular courses" link="#" />
        <CourseCategoryCard class="mb-4" bgColor="#FEF5D4" textColor="#fec801" />
        <CourseCategoryCard class="mb-4" bgColor="#E2F3FC" textColor="#019FF8" />
        <CourseCategoryCard class="mb-4" bgColor="#FCECF1" textColor="#F2426D" />
        <CourseCategoryCard class="mb-0" bgColor="#D7F3EF" textColor="#58BAAB" />
      </div>
      <!-- 2 -->
      <div class="overflow-hidden">
        <WrapBoxTitle title="Users Chart" />
        <WrapBox class="w-full">
          <PieChart :data="pieChartData" chartId="chart_users" />
        </WrapBox>
      </div>
      <!-- 3 -->
      <div class="flex flex-col justify-between">
        <WrapBoxTitle title="Popular mentors" link="#" />
        <CourseInstructorCard class="mb-4" :image="AvatarImg" />
        <CourseInstructorCard class="mb-4" :image="AvatarImg" />
        <CourseInstructorCard class="mb-4" :image="AvatarImg" />
        <CourseInstructorCard class="mb-0" :image="AvatarImg" />
      </div>
      <!-- 4 -->
      <div class="col-span-2">
        <WrapBoxTitle title="Total Statistics" />
        <WrapBox class="w-full">
          <LineChart :data="pieChartData" chartId="total_statistics"  />
        </WrapBox>
      </div>
      <!-- 5 -->
      <div class="flex flex-col justify-between">
        <WrapBoxTitle title="Popular courses" link="#" />
        <StatisticCard class="mb-4" color="#fec801" text="Courses In Progress" icon="bx bx-bar-chart-square" num="32" />
        <StatisticCard class="mb-4" color="#019FF8" text="Completed Courses" icon="bx bx-badge-check" num="14" />
        <StatisticCard class="mb-4" color="#F2426D" text="Watching Time" icon="bx bx-video" num="214h 21m" />
        <StatisticCard class="mb-0" color="#58BAAB" text="Earning Points" icon="bx bx-up-arrow-circle" num="8" />
      </div>      
    </div>
  </div>
</template>

<style></style>
