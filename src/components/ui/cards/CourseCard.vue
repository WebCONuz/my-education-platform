<script setup>
const props = defineProps({
    data: Object
})
</script>

<template>
    <div class="course-card rounded-lg overflow-hidden box-shadow p-2 bg-white">
        <img :src="data.image" alt="course image" class="w-full h-[200px] object-cover">
        <div class="card-body pt-4 pb-2 px-1 text-sm border-b border-gray-200">
            <div class="flex items-center justify-between mb-2">
                <span 
                    class="py-[2px] px-2 rounded-md" 
                    :class="data.status === 'open' ? 'bg-green-100 text-green-500' : 'bg-pink-100 text-pink-500'"
                >{{ data.status }}</span>
                <div class="w-8 h-8 rounded-md bg-yellow-300 text-white flex items-center justify-center">
                    <i class='bx bxs-star text-base' ></i>
                </div>
            </div>
            <h3 class="mb-2 font-semibold text-base">{{ data.name }}</h3>
            <p class="text-gray-500 mb-3">{{ data.category }}</p>
            <div class="flex mb-2">
                <p class="flex items-center mr-3 text-gray-500">
                    <i class='bx bx-stopwatch text-base text-orange-400 mr-2' ></i>
                    <span>{{ data.duration }}</span>
                </p>
                <p class="flex items-center text-gray-500">
                    <i class='bx bxs-user text-base text-orange-400 mr-2' ></i>
                    <span>{{ data.students }}</span>
                </p>                
            </div>
            <p class="flex items-center mr-4 text-gray-500">
                <i class='bx bxs-graduation text-base text-orange-400 mr-2' ></i>
                <span>{{ data.lessons }} lessons</span>
            </p>
        </div>
        <div class="card-footer px-1 py-2 flex items-center justify-between">
            <div class="flex items-center">
                <img :src="data.instructor_image" alt="instructor" class="w-8 h-8 rounded-full object-cover mr-2" >
                <p class="text-xs font-semibold">{{ data.instructor }}</p>
            </div>
            <div class="w-8 h-8 rounded-md bg-orange-400 text-white flex items-center justify-center">
                <i class='bx bx-dots-horizontal-rounded text-base' ></i>
            </div>
        </div>
    </div>
</template>

<style scoped></style>