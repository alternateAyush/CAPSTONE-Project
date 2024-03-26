/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '5010': "50%",
        '6010': "60%",
        '7010': "70%",
        '8010': "80%",
        '9010': "90%",
      }
    },
  },
  plugins: [],
});

