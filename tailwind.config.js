/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      peydaReg: ["Peyda-Reg"],
      peydaThin: ["Peyda-Thin"],
      peydaBlack: ["Peyda-Black"],
      peydaBold: ["Peyda-Bold"],
      peydaExBold: ["Peyda-ExBold"],
      peydaMed: ["Peyda-Med"],
      peydasemBold: ["Peyda-semBold"],
      peydaLight: ["Peyda-Light"],
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
