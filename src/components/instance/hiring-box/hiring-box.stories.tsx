import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { theme } from '../../../styles/theme';
import HiringBox from './hiring-box';

export default {
  title: 'Instance/HiringBox',
  component: HiringBox,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <HiringBox />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
