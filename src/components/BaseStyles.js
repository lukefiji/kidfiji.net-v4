import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components';
import defaultTheme from 'tailwindcss/defaultTheme';

const BaseStyles = createGlobalStyle`
  .light {
    --bg-primary: ${defaultTheme.colors.gray[50]};
    --bg-secondary: ${defaultTheme.colors.gray[50]};
    --text-primary: ${defaultTheme.colors.gray[800]};
    --text-secondary: ${defaultTheme.colors.gray[800]};
    --color-primary: #E11D48;
    --bg-effect-color: ${defaultTheme.colors.gray[800]};
  }
  
  .dark {
    --bg-primary: ${defaultTheme.colors.gray[800]};
    --bg-secondary: ${defaultTheme.colors.gray[800]};
    --text-primary: ${defaultTheme.colors.gray[200]};
    --text-secondary: ${defaultTheme.colors.gray[200]};
    --color-primary: #2563EB;
    --bg-effect-color: ${defaultTheme.colors.gray[200]};
  }

  body {
    ${tw`bg-primary text-primary transition-all duration-200`}
  }
`;

export default BaseStyles;
