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
        type: 'line',
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
    <canvas :id="props.chartId"></canvas>
</template>

<style></style>