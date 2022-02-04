import React from 'react';
import { ComponentStory } from '@storybook/react';
import LandingPage from "../pages/LandingPage";

export default {
  title: 'Pages/LandingPage',
  component: LandingPage,
} ;

const Template: ComponentStory<typeof LandingPage> = (arg) => <LandingPage {...arg} />;

export const Arriver = Template.bind({});
Arriver.args = {

};
