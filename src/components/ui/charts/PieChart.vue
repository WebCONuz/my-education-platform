<script setup>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

const props = defineProps({
    data: Array,
    chartId: String
})

onMounted(() => {
    new Chart(
        document.getElementById(props.chartId),
        {
        type: 'pie',
        data: {
            labels: props.data.map(row => row.year),
            datasets: [
            {
                label: 'Acquisitions by year',
                data: props.data.map(row => row.count)
            }
            ]
        }
        }
    );
})
</script>

<template>
    <div class="pieChart mx-auto">
        <canvas :id="props.chartId"></canvas>
    </div>
</template>

<style>
@media screen and (min-width: 2000px) {
    .pieChart{
        width: 65%;
    }
}
@media screen and (min-width: 2200px) {
    .pieChart{
        width: 55%;
    }
}
@media screen and (max-width: 2000px) {
    .pieChart{
        width: 75%;
    }
}
@media screen and (max-width: 1750px) {
    .pieChart{
        width: 85%;
    }
}
@media screen and (max-width: 1600px) {
    .pieChart{
        width: 95%;
    }
}
@media screen and (max-width: 1510px) {
    .pieChart{
        width: 100%;
    }
}
</style>