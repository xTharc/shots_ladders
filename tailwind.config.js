module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
        colors: {
          neznaRumena: "#F9F0DA",
          rumena: "#e9c46a",
          oranzna: "#F4A261",
          temnoOranzna: "#E76F51",
          turkizna: "#2a9d8f",
          temnoZelena: "#264653",
        },
        fontFamily: {
          naslovi: "arlbold",

    },
        borderWidth: {
          '3': '3px',
        },
   
    },
   
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#e76f51",
        
"secondary": "#f4a261",
        
"accent": "#2a9d8f",
        
"neutral": "#264653",
        
"base-100": "#FFFFFF",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
