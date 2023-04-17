<template>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
import { onMounted, computed, onBeforeMount, ref } from "vue";
import { UseCommonStore } from "./store/common.store";

const { GetPages } = UseCommonStore();


computed(() => {});

onMounted(() => {
  console.log("On mount");
  GetPages();
  
});
</script>
 