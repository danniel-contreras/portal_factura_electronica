import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  CoHamburgerMenu,
  IoNotificationsSharp,
  IoHome,
} from "oh-vue-icons/icons";
import {
  HiLogin,
  HiChevronDown,
  GiWorld,
  HiLogout,
  HiSolidMenu,
  BiChevronExpand,
} from "oh-vue-icons/icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import * as OiIcon from "oh-vue-icons/icons/oi";

const Fa = Object.values({ ...FaIcons });
const Oi = Object.values({ ...OiIcon });

addIcons(
  HiLogin,
  HiChevronDown,
  IoHome,
  GiWorld,
  HiLogout,
  HiSolidMenu,
  BiChevronExpand
);
addIcons(...Fa, ...Oi);

addIcons(CoHamburgerMenu, IoHome, IoNotificationsSharp);

export default OhVueIcon;
