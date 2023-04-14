<template>
  <!-- component -->
  <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
    <div
      ref="sidebar"
      class="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-gray-900"
    >
      <div class="sidebar-header flex px-3 mt-8">
        <div class="inline-flex">
          <a href="#" class="flex">
            <img class="w-10" src="../assets/logo.svg" />
            <span class="leading-10 text-gray-100 text-sm font-semibold ml-1 uppercase"
              >CompanyName</span
            >
          </a>
        </div>
        <button @click="close_menu" class="absolute md:hidden right-3 top-2">
          <oh-vue-icon class="text-gray-50" scale="1.5" name="fa-times"></oh-vue-icon>
        </button>
      </div>
      <div class="sidebar-content px-4 py-6">
        <ul class="flex flex-col w-full">
          <li class="my-px">
            <a
              href="#"
              class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
            >
              <span class="flex items-center justify-center text-lg text-gray-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </span>
              <span class="ml-3">Dashboard</span>
            </a>
          </li>
          <li class="my-px">
            <span class="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase"
              >Projects</span
            >
          </li>
          <li v-for="(op) in menu.options" class="my-px">
            <router-link :to="op.page.pagePath"
              class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span class="flex items-center justify-center text-lg text-red-400">
               <oh-vue-icon :name="op.optionIcon"/>
              </span>
              <span class="ml-3">{{op.optionName}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <main
      class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in"
    >
      <header class="header bg-white shadow-lg py-4 px-4">
        <div class="header-content flex bg-white items-center flex-row">
          <button @click="open_menu" class="md:hidden">
            <oh-vue-icon
              class="text-gray-600"
              scale="1.5"
              name="oi-three-bars"
            ></oh-vue-icon>
          </button>
          <p class="text-xl font-semibold ml-5">Titulo de la pagina</p>
          <div class="flex ml-auto">
            <a class="flex flex-row items-center">
              <img
                src="https://pbs.twimg.com/profile_images/378800000298815220/b567757616f720812125bfbac395ff54_normal.png"
                class="h-10 w-10 bg-gray-200 border rounded-full"
              />
              <span class="flex flex-col ml-2">
                <span class="truncate w-20 font-semibold tracking-wide leading-none"
                  >John Doe</span
                >
                <span class="truncate w-20 text-gray-500 text-xs leading-none mt-1"
                  >Manager</span
                >
              </span>
            </a>
          </div>
        </div>
      </header>
      <div class="main-content flex flex-col justify-center items-center bg-gray-50 flex-grow p-4">
        <div
          class="flex flex-col flex-grow max-h-[85vh] border-2 border-dashed border-gray-300 bg-white rounded mt-4"
        >
          <perfect-scrollbar
            :options="{
              autoHideDelay: 500,
              autoHide: true,
              wheelSpeed: 1,
              wheelPropagation: true,
              swipeEasing: true,
              minScrollbarLength: 20,
            }"
          >
            <div class="w-full h-full p-6">
              <!-- <slot /> -->
             <slot/>
            </div>
          </perfect-scrollbar>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { UseCommonStore } from '../store/common.store';
import { storeToRefs } from 'pinia';
import OhVueIcon from '../plugins/vue-icons';

const sidebar = ref<HTMLDivElement>();

const open_menu = () => {
  if (sidebar.value) {
    sidebar.value.classList.replace("-translate-x-full", "translate-x-0");
  }
};

const close_menu = () => {
  if (sidebar.value) {
    sidebar.value.classList.replace("translate-x-0", "-translate-x-full");
  }
};

const {GetMenus} = UseCommonStore()
const {menu} = storeToRefs(UseCommonStore())

onMounted(async ()=>{
  await GetMenus()
})
</script>

<style lang="scss"></style>
