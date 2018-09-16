import { css } from 'docz-plugin-css'

export default {
  src: './docs',
  typescript: true,
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
        },
      ],
    },
  },
  themeConfig: {
    styles: {
      body: {
        fontFamily: null,
      },
      pre: {
        fontFamily: null,
      },
    },
  },
  plugins: [
    css({
      preprocessor: 'postcss',
      // cssmodules: true,
      loaderOpts: {
        /* whatever your preprocessor loader accept */
      },
    }),
  ],
}
