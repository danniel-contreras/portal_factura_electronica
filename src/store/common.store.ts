import { defineStore } from "pinia";
import { get_menus_by_user } from "../services/menus.service";
import { MenusOptions } from "../types/menus.types";

export const UseCommonStore = defineStore("common", {
  state: () => ({
    menu: {} as MenusOptions,
  }),
  persist: {
    storage: sessionStorage,
    paths: ['common'],
  },
  actions: {
    async GetMenus() {
      const result = await get_menus_by_user();
      this.menu = result.result;
    },
  },
});
