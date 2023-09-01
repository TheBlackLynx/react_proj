import { StyleDecorator } from 
    "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import {addDecorator} from "@storybook/react";
import { ThemeDecorator } from 
    "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    themes: {
        default: 'twitter',
        list: [
          { name: 'light', class: Theme.LIGHT, color: '#rgb(221 239 201)' },
          { name: 'dark', class: Theme.DARK, color: '#rgb(9 31 21)' },
          { name: 'blue', class: Theme.BLUE, color: '#334977' },
        ],
      },
};
addDecorator(StyleDecorator);
// addDecorator(SuspenseDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));