<template>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
import { onMounted, computed, onBeforeMount, ref } from "vue";
import { UseCommonStore } from "./store/common.store";
import { storeToRefs } from "pinia";
import router from "./router/router";
import { useRouter, createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Test from "./pages/Test.vue";
const Router = () => import("./pages/Routes.vue");

const { GetPages } = UseCommonStore();

const { pages } = storeToRefs(UseCommonStore());
const load = ref(true);

computed(() => {});

onMounted(() => {
  console.log("On mount");
  GetPages();
  
});
</script>
