/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        mosk: [
          'mosk',
          '-apple-system',
          'BlinkMacSystemFont',
          'Helvetica Neue',
          'Segoe UI',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
        ],
        firaCode: [
          'Fira Code',
          'Menlo',
          'Monaco',
          'Lucida Console',
          'Liberation Mono',
          'DejaVu Sans Mono',
          'Bitstream Vera Sans Mono',
          'Courier New',
          'monospace',
        ],
        cascadiaCode: [
          'Cascadia Code',
          'Menlo',
          'Monaco',
          'Lucida Console',
          'Liberation Mono',
          'DejaVu Sans Mono',
          'Bitstream Vera Sans Mono',
          'Courier New',
          'monospace',
        ],
        gilroy: [
          'gilroy',
          '-apple-system',
          'BlinkMacSystemFont',
          'Helvetica Neue',
          'Segoe UI',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
        ],
      },
      colors: {
        'primary-gray': '#3e3e3e',
        'background-gray': '#f7f7f7',
        'code-editor': '#24292e',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({addVariant}) {
      addVariant('lines', '& code > span')
      addVariant('markedlines', "& span[markedlines='1']")
      addVariant('hasfilename', "& pre[filename='1']")
      addVariant('oversizedWrapper', '& .oversizedWrapper')
      addVariant('hiddenpre', '& .hiddenPre'),
      addVariant('inlineCode', '& .inlineCode')
    },
  ],
};
