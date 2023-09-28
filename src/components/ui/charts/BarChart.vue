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
        type: 'bar',
        data: {
            labels: props.data.map(row => row.year),
            datasets: [
                {
                    label: 'Visitors',
                    data: props.data.map(row => row.count),
                    backgroundColor: '#5A8DEE',
                }
            ]
        }
        }
    );
})
</script>

<template>
    <canvas :id="props.chartId" style="width: 100%;"></canvas>
</template>

<style></style>