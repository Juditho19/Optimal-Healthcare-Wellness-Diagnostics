import { link } from "framer-motion/client";

const styles = {
  // Layout
  paddingX: "px-4 sm:px-8 md:px-12 lg:px-16",
  paddingY: "py-20",

  
  // Text styles
  heading1: "text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4",
  heading2: "text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 ",
  heading3: "text-xl lg:text-2xl font-bold mb-2 ",
  bodyText: "text-sm md:text-base lg:text-lg",
  paragraph: "text-sm md:text-base lg:text-lg mb-4 font-regular",
  link: "text-xs md:text-sm font-bold",
 


  // Buttons
  primaryButton: "text-white bg-cyan rounded-full py-3 px-3 font-bold shadow hover:opacity-75 transition-all duration-150 text-xs md:text-sm lg:text-base",

  // Cards
  Card: "flex flex-col items-center text-center border-2 border-skyBlue rounded-2xl shadow-xl p-8 flex-1 ",
  
  // Sections
  section: "px-4 sm:px-8 md:px-12 lg:px-16 py-24",

  // form
  inputBase:
    "border-2 border-cyan rounded-full px-4 py-3 w-full " +
    "focus:outline-none focus:border-deepBlue transition-colors " +
    "text-gray-700",

  inputWithIcon:
    "border-2 border-cyan rounded-full px-4 py-3 w-full " +
    "focus:outline-none focus:border-deepBlue transition-colors " +
    "text-gray-700 appearance-none pr-12",

  label:
    "text-deepBlue font-medium mb-2 text-sm",

  textarea:
    "border-2 border-cyan rounded-3xl px-4 py-3 resize-none " +
    "focus:outline-none focus:border-deepBlue transition-colors w-full",

  
  inputBase:
    "border-2 border-cyan rounded-full px-4 py-3 text-gray-600 focus:outline-none focus:border-deepBlue transition-colors w-full",

  // inputDateTime:
  //   "border-2 border-cyan rounded-full px-4 py-3 text-gray-600 focus:outline-none focus:border-deepBlue transition-colors w-full appearance-none " +
  //   "[&::-webkit-calendar-picker-indicator]:filter " +
  //   "[&::-webkit-calendar-picker-indicator]:invert-[58%] " +
  //   "[&::-webkit-calendar-picker-indicator]:sepia-[96%] " +
  //   "[&::-webkit-calendar-picker-indicator]:saturate-[5488%] " +
  //   "[&::-webkit-calendar-picker-indicator]:hue-rotate-[156deg] " +
  //   "[&::-webkit-calendar-picker-indicator]:brightness-[96%] " +
  //   "[&::-webkit-calendar-picker-indicator]:contrast-[101%]"



  // ...existing
  inputDateTime:
    "border-2 border-cyan rounded-full px-4 py-3 text-gray-700 focus:outline-none focus:border-deepBlue transition-colors w-full",
  // add the indicator rules using Tailwind's arbitrary selector syntax:
  inputDateTimeIndicator:
    "[&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert-[58%] [&::-webkit-calendar-picker-indicator]:sepia-[96%] [&::-webkit-calendar-picker-indicator]:saturate-[5488%] [&::-webkit-calendar-picker-indicator]:hue-rotate-[156deg] [&::-webkit-calendar-picker-indicator]:brightness-[96%] [&::-webkit-calendar-picker-indicator]:contrast-[101%]",

  
};

export default styles;