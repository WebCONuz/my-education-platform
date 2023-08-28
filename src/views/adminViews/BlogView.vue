<script setup>
import StatisticCard from '../../components/ui/cards/StatisticCard.vue';
import BarChart from '../../components/ui/charts/BarChart.vue';
import { chartData, postData } from "../../data";
import PostCard from '../../components/ui/cards/PostCard.vue';
</script>

<template>
    <main class="blog">
        <Breadcrumb title="Blog" :data="['Dashboard', 'Blog']" />
        <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2">
                <WrapBoxTitle title="Post Statistcs" />
                <div class="grid grid-cols-3 gap-x-5 mb-4">
                    <StatisticCard color="#5A8DEE" text="Total Post" icon="bx bxs-book-alt" num="120" /> 
                    <StatisticCard color="#5A8DEE" text="Pages" icon="bx bxs-file-blank" num="86" />
                    <StatisticCard color="#5A8DEE" text="Comments" icon="bx bxs-message-square-dots" num="4235" />
                </div>
                <div class="grid">
                    <WrapBoxTitle title="Visitors" />
                    <WrapBox class="w-full">
                        <BarChart :data="chartData" chartId="chart_blog" />
                    </WrapBox>
                </div>
            </div>
            <div class="">
                <WrapBoxTitle title="Last Posts" link="#" />
                <WrapBox class="w-full">
                    <PostCard 
                        v-for="item in postData" 
                        :data="item" 
                        :key="item.id + 'OOUI'" 
                        :class="item.id !== postData[postData.length - 1].id ? 'mb-5' : 'mb-0'" 
                    />
                </WrapBox>
            </div>
        </div>
    </main>
</template>

<style></style>