import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: colors.blue,
        secondary: colors.green,
        neutral: colors.gray,
        danger: colors.red,
        warning: colors.yellow,
        success: colors.green,
        info: colors.blue,
      }
      
    },
  },
  plugins: [],
};
