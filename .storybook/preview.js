// Import Shoelace styles
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';

// Register Shoelace custom elements
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

// Set the base path to the folder where assets are copied
setBasePath('/');

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}; 