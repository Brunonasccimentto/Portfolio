/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      boxShadow: {
        morfism:  "9px 9px 12px #adb5bf, -9px -9px 30px #e9f5ff",
        morfismSlate: " 9px 9px 18px #0a0f1b, -9px -9px 18px #141f39",
        inset: "inset 9px 9px 12px #adb5bf, inset -9px -9px 30px #e9f5ff",
        insetSlate: "inset 9px 9px 18px #0a0f1b, inset -9px -9px 18px #141f39",
        modalShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
      },

      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      fontFamily: {
        inter: "inter, sans-serif",
        oswald: "Oswald, sans-serif"
      },

      contentShow: {
        '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
        '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
      },
       
        keyframes:{
          slide:{
            "0%": {transform: "translateX(1000px) scaleY(1) scaleX(4)", 
                   transformOrigin: "0% 0%",
                   filter: "blur('40px')", 
                   opacity: 0},
            "100%": {
                  transform: "translateY(0) scaleY(1) scaleX(1)",
                  transformOrigin: "50% 100%",
                  filter: "blur('0px')",
                  opacity: 1
                }
            },

          bounce: {
            "0%": {
              transform: "translateX(-600px)",
              transitionTimingFunction: "ease-in",
              opacity: 0
            },
            "38%": {
              transform: "translateX(0);",
              transitionTimingFunction: "ease-out",
              opacity: 1
            },
            "55%": {
              transform: "translateX(-68px);",
              transitionTimingFunction: "ease-in"
            },
            "72%": {
              transform: "translateX(0);",
              transitionTimingFunction: "ease-out"
            },
            "81%": {
              transform: "translateX(-28px);",
              transitionTimingFunction: "ease-in"
            },
            "90%": {
              transform:" translateX(0);",
              transitionTimingFunction: "ease-out"
            },
            "95%": {
              transform: "translateX(-8px);",
              transitionTimingFunction: "ease-in"
            },
            "100%": {
              transform: "translateX(0);",
              transitionTimingFunction: "ease-out"
            },
          }
          },
          animation: {
            slide: "slide 1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;",
            bounce: "bounce 1.5s both",
            contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)"
          }
        },
    },

    
  
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}