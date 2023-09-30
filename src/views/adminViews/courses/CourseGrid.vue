<script setup>
import CourseCard from "../../../components/ui/cards/CourseCard.vue";
import MainTableTitle from "../../../components/ui/titles/MainTableTitle.vue";
import { courses } from "../../../data";
</script>

<template>
    <main class="course_grid">
        <Breadcrumb title="Grid View" :data="['Dashboard', 'Courses', 'Grid View']" />

        <!-- header of table -->
        <MainTableTitle class="mt-2 mb-4" title="Courses" />

        <!-- Card -->
        <div class="flex flex-wrap">
            <div class="card-wrapper" v-for="(item, index) in courses" :key="index + 'CARDS'">
                <CourseCard :data="item" />
            </div>
        </div>
    </main>
</template>

<style scoped>
.card-wrapper{
    width: calc(100% / 5 - 20px);
    margin: 10px;
}
</style>