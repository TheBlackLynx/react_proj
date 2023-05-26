import { StyleDecorator } from 
    "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import {addDecorator} from "@storybook/react";
import { ThemeDecorator } from 
    "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers";
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
addDecorator(StyleDecorator);
// addDecorator(SuspenseDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));