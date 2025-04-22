/* This function is used to convert from tailwind css className to hex*/
export default function tailwindClassToHex(className) {
  const colors = require("tailwindcss/colors");
  const splitString = className.split("-");

  //   console.log(splitString);

  const colorGroup = splitString[1]; //color name
  const shade = splitString[2]; //shade

  return colors[colorGroup]?.[shade] || null;
}
