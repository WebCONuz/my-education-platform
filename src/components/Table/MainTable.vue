<script setup>
const props = defineProps({
  headers: Array,
  data: Array,
});
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
    <table
      class="min-w-full text-sm text-left text-gray-500 dark:text-gray-400"
    >
      <!-- header -->
      <thead
        class="text-sm text-gray-700 bg-[#E2E8F0] dark:bg-[#DEF7EC] dark:text-gray-400"
      >
        <tr>
          <th
            v-for="(item, index) in headers"
            scope="col"
            class="px-4 py-3 uppercase font-semibold"
            :key="index + 'CCMMB'"
          >
            {{ item.title }}
          </th>
        </tr>
      </thead>

      <!-- body -->
      <tbody>
        <tr
          v-for="item in data"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-100"
          :key="item.id + 'JJDF'"
        >
          <td
            v-for="(td, tdIndex) in headers"
            class="px-4 py-[10px]"
            :key="tdIndex + 'TDIndex'"
          >
            <slot :name="`td_${td.value}`" :item="item">{{
              item[td.value]
            }}</slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
