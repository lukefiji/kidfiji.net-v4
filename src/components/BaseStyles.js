import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components';
import defaultTheme from 'tailwindcss/defaultTheme';
import theme from '../constants/theme';

const BaseStyles = createGlobalStyle`
  .light {
    --bg-primary: ${theme.colors.offWhite};
    --bg-secondary: ${theme.colors.offWhite};
    --text-primary: ${theme.colors.darkGray};
    --text-secondary: ${theme.colors.darkGray};
    --color-primary: ${theme.colors.red};
    --bg-effect-color: ${theme.colors.darkGray};
  }
  
  .dark {
    --bg-primary: ${theme.colors.darkGray};
    --bg-secondary: ${theme.colors.darkGray};
    --text-primary: ${theme.colors.lightGray};
    --text-secondary: ${theme.colors.lightGray};
    --color-primary: ${theme.colors.blue};
    --bg-effect-color: ${theme.colors.lightGray};
  }

  body {
    ${tw`bg-primary text-primary transition-all duration-200`}
  }
`;

export default BaseStyles;
