import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { theme } from '../../../styles/theme';
import { Cell, Grid } from '../../content/layout-grid/layout-grid';
import JobsBox from './jobs-box';

export default {
  title: 'Instance/JobsBox',
  component: JobsBox,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Grid backgroundColor="#f2f2f2">
      <Cell width={1}>
        <JobsBox margin="20px 0" />
        <JobsBox margin="20px 0" />
        <JobsBox margin="20px 0" />
        <JobsBox margin="20px 0" />
        <JobsBox margin="20px 0" />
      </Cell>
    </Grid>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
