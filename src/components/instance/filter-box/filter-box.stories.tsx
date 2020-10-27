import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { theme } from '../../../styles/theme';
import FilterBox from './filter-box';

export default {
  title: 'Instance/FilterBox',
  component: FilterBox,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <FilterBox />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
