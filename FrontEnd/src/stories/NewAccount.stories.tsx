

// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import NewAccount from "../pages/NewAccount";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'pages/NewAccount',
  component: NewAccount,
} as ComponentMeta<typeof NewAccount>;

export const Primary: ComponentStory<typeof NewAccount> = () => <NewAccount />;