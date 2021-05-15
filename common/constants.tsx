import { Icon } from "@chakra-ui/icons";
import {
  MdHome,
  MdStar,
  MdThumbDown,
} from "react-icons/md";

export const ROUTES = {
  Stories: {
    path: "/stories",
    icon: <Icon as={MdHome} fontSize={25} m={1} />,
  },
  Recommended: {
    path: "/recommended",
    icon: <Icon as={MdStar} fontSize={25} m={1} />,
  },
  ["Boo List"]: {
    path: "/boo",
    icon: <Icon as={MdThumbDown} fontSize={25} m={1} />,
  },
} as const;

export const OPTIONS = [
  {
    label: "Newest",
    value: "newest",
  },
  {
    label: "Popular",
    value: "popular",
  },
];
