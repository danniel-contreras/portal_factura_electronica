import axios from "axios";
import { API_URL } from "../utils/constants";
import { MenusOptions } from "../types/menus.types";

export const get_menus_by_user = async () => {
  const result = await axios.get<{ result: MenusOptions; ok: boolean }>(
    API_URL + "/menu/options/6"
  );
  return result.data;
};
