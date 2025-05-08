/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '450px',
        // => @media (min-width: 450px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1700px',
      },
      fontSize: {
        '12': ['12px','22px'],
        '14': ['14px','24px'],
        '16': ['16px','26px'],
        '18': ['18px','28px'],
        '20': ['20px','30px'],
        '22': ['22px','32px'],
        '24': ['24px','34px'],
        '26': ['26px','36px'],
        '28': ['28px','38px'],
        '30': ['30px','40px'],
        '32': ['32px','42px'],
        '34': ['34px','44px'],
        '36': ['36px','46px'],
        '38': ['38px','48px'],
        '40': ['40px','50px'],
        '42': ['42px','52px'],
        '44': ['44px','54px'],
        '46': ['46px','56px'],
        '48': ['48px','58px'],
        '50': ['50px','60px'],
        '52': ['52px','62px'],
        '54': ['54px','64px'],
        '56': ['56px','66px'],
        '58': ['58px','68px'],
        '60': ['60px','70px'],
        '62': ['62px','74px'],
      },
      colors: {
        'primary': '#500104',
        'secondary': '#FDE88B',
        'orange': '#FC791A',
        'd_green': '#122F2A',
        'c1': '#FEE98E',
        'l1' : '#F7F4EF',
      },
      fontFamily: {
        'anek' : ['Anek Devanagari','sans-serif'],
        'noto_sans' : ['Noto Sans Devanagari','sans-serif']
      }
    },
  },
  plugins: [],
}