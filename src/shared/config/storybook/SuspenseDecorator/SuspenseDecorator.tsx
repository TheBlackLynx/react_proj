import '@/app/styles/index.scss';
import {Story} from "@storybook/react";
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

export const SuspenseDecorator = () => (StoryComponent: Story) => (
    <Suspense fallback={<div>...</div>}>
        <StoryComponent />
    </Suspense>
);