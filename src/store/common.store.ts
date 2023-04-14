import { defineStore } from "pinia";
import {
  get_menus_by_user,
  get_pages_by_user,
} from "../services/menus.service";
import { MenusOptions } from "../types/menus.types";
import { PageI } from "../types/pages.types";
import router from "../router/router";
import { RouteRecordRaw } from "vue-router";
import { useRoute, useRouter } from "vue-router";
export const UseCommonStore = defineStore("common", {
  state: () => ({
    menu: {} as MenusOptions,
    pages: [] as PageI[],
    routes: [] as RouteRecordRaw[],
  }),
  persist: {
    storage: sessionStorage,
    paths: ["common"],
  },
  actions: {
    async GetMenus() {
      const result = await get_menus_by_user();
      if (result.ok) {
        this.menu = result.result;
      }
    },
    async GetPages() {
      const { ok, result } = await get_pages_by_user();
      if (ok) {
        this.pages = result;
        localStorage.setItem("pages",JSON.stringify(result))
      } else {
        this.pages = [];
      }
    },
  },
});
