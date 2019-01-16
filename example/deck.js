import intro from './topics/intro.mdx';
import gatsbyOverview from './topics/gatsby-overview.mdx';
import newFeatures from './topics/new-features.mdx';
import demo from './topics/demo.mdx';
import qAndA from './topics/q-and-a.mdx';
import conclusion from './topics/conclusion.mdx';

// import './fonts/Webfonts/futurapt_book_macroman/stylesheet.css'
// import './fonts/Webfonts/futurapt_bookitalic_macroman/stylesheet.css'
// import './fonts/Webfonts/futurapt_demi_macroman/stylesheet.css'
// import './fonts/Webfonts/futurapt_demiitalic_macroman/stylesheet.css'
// import 'typeface-space-mono'
// import 'typeface-spectral'

/** Note: custom theme should extending default theme
 *    https://github.com/jxnblk/mdx-deck/blob/118f7fd439fba16c5bf08724741368d2802d9b77/docs/theming.md#custom-themes
 */
export { default as theme } from 'gatsby-mdx-theme';
export default [
  ...intro,
  ...gatsbyOverview,
  ...newFeatures,
  ...demo,
  ...qAndA,
  ...conclusion,
];
