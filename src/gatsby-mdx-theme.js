import theme from 'mdx-deck/themes'; // https://github.com/jxnblk/mdx-deck/blob/118f7fd439/src/themes/index.js
import { theme as mcsTheme } from 'mcs-ui';

import { code, header } from './fonts';
import colors from './colors';
import codeTheme from './gatsby-code-theme';

export * from './layouts';

export default {
  ...theme,
  font: header.join(','),
  monospace: code.join(','),
  transitionTimingFunction: 'linear',
  transitionDuration: '0s',
  colors: {
    background: 'white',
    heading: mcsTheme.color.primary,
  },
  blockquote: {
    color: mcsTheme.color.primary,
    paddingLeft: '2rem',
    borderLeft: `5px solid ${mcsTheme.color.primary}`,
  },
  paragraph: {
    color: mcsTheme.color.primary,
  },
  li: {
    color: mcsTheme.color.primary,
  },
  prism: {
    style: codeTheme,
  },
};
