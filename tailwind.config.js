/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'page': '#F5F7F8',
        'badgeColor': '#3AC1A9',
        'badgeBorderColor': '#73D9C7',
        'navigation-primary': '#31363B',
        'navigation-secondary': '#32363A',
        'navigation-client-logos': '#2A2F33',
        'navigation-menu': '#393D42',
        'navigation-menu-active': '#F55661',
        'status-published': '#ACACAC',
        'status-scheduled': '#3AC183',
        'status-needApproval': '#F7BF38',
        'status-error': '#FB6450',
        'status-notes': '#67B1F2',
        'card-time-color': '#ACACAC',
        'card-text-color': '#959595',
        'gray-text-color': '#444444'
      },
      height: {

      },
      gridTemplateColumns: {
        'cards': 'repeat(auto-fill, minmax(369px, 369px))'
      },
      fontSize: {
        9: '9px',
        12: '12px',
        14: '14px',
        22: '22px'
      },
      fontFamily: {
        raleway: ['Raleway'],
        barlowSemiCondensed: ['"Barlow Semi Condensed"']
      },
      borderRadius: {
        4: '4px',
        6: '6px'
      },
      opacity: {
        24: '.24',
        76: '.76',
        88: '.88'
      }
    }
  },
  plugins: []
}
