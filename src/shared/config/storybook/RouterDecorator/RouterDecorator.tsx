import 'app/styles/index.scss';
import {Story} from "@storybook/react"
import { Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = () => (StoryComponent: Story) => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
);