/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'plus': ['"Plus Jakarta Sans"', 'Inter'],
      'inter': ['Inter', 'Georgia'],
      'mono': ['"DM Sans"', 'SFMono-Regular'],
      'yellow': ['Yellowtail' ],
      'ddin': ['D-DIN-PRO'],
      'roboto': ['Roboto'],
      'opensans': ['open sans'],
      'misans': ['"Mi Sans"'],
      'helvetica': ['"Helvetica Neue"']
    }
  },
  plugins: [],
}

