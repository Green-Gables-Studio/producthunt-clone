import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { theme } from '../../../styles/theme';
import SubscribeBox from './subscribe-box';

export default {
  title: 'Instance/SubscribeBox',
  component: SubscribeBox,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <SubscribeBox />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
