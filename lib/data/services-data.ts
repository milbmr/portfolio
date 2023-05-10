import { AiOutlineAntDesign } from "react-icons/ai";
import {
  FaMobileAlt,
  FaReact,
  FaDraftingCompass,
  FaTools,
} from "react-icons/fa";
import { SiTestcafe } from "react-icons/si";
import { HiUserGroup } from "react-icons/hi";
import { BiAccessibility } from "react-icons/bi";
import { IconType } from "react-icons";

export type DataType = {
  title: string;
  description: string;
  Icon: IconType;
};

export const data = [
  {
    title: "Design implementation",
    description:
      "Turn website designs into functional web pages using HTML, CSS, and JavaScript",
    Icon: AiOutlineAntDesign,
  },
  {
    title: "Responsive web development",
    description:
      "Create websites that work well on different devices and screen sizes",
    Icon: FaMobileAlt,
  },
  {
    title: "Frontend optimization",
    description:
      " Optimize the performance of websites by reducing load times and improving page speed",
    Icon: FaReact,
  },
  {
    title: "Cross-browser compatibility",
    description:
      "Ensure that websites work consistently across different web browsers such as Chrome, Safari, and Firefox",
    Icon: FaDraftingCompass,
  },
  {
    title: "Testing and debugging",
    description:
      "Test and debug frontend code to ensure that websites function as intended",
    Icon: SiTestcafe,
  },
  {
    title: "Maintenance and updates",
    description:
      "Maintain and update existing websites to ensure that they remain up-to-date and relevant",
    Icon: FaTools,
  },
  {
    title: "Collaboration with developers",
    description:
      "Collaborate with designers and backend developers to create functional web applications",
    Icon: HiUserGroup,
  },
  {
    title: "Accessibility implementation",
    description:
      "Implement accessibility features to make usable for people with disabilities",
    Icon: BiAccessibility,
  },
];
