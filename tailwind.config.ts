import { colors } from "@nextui-org/theme";

// Import Tailwind CSS plugin and configuration
const { nextui } = require('@nextui-org/theme');
const daisyui = require('daisyui');
const { Config } = require("tailwindcss");

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(calendar|button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
    },
  },
  plugins: [
    require('daisyui'),
    nextui(),
    // other plugins...
  ],

};

module.exports = config;
