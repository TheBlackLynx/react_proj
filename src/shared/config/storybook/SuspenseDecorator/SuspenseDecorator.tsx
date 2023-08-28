// eslint-disable-next-line marica-path-checker-plugin/layer-import
import '@/app/styles/index.scss';
import {Story} from "@storybook/react";
import { Suspense } from 'react';

export const SuspenseDecorator = () => (StoryComponent: Story) => (
    <Suspense fallback={<div>...</div>}>
        <StoryComponent />
    </Suspense>
);