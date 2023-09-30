<script setup>
import { course_category } from '../../../data';
import CourseCategoryCard from '../../../components/ui/cards/CourseCategoryCard.vue';
</script>

<template>
    <main class="course_category">
        <Breadcrumb title="Caregory" :data="['Dashboard', 'Courses', 'Category']" />

        <!-- header of table -->
        <MainTableTitle class="mt-2 mb-4" title="All Categories" />

        <!-- main content -->
        <div class="flex flex-wrap">
            <div class="card-wrapper" v-for="(item, index) in course_category" :key="index + 'CATEGORY'">
                <CourseCategoryCard :data="item" bgColor="#E2F3FC" textColor="#019FF8" />
            </div>
        </div>
    </main>
</template>

<style scoped>
.card-wrapper{
    width: calc(100% / 3 - 20px);
    margin: 10px;
}
</style>