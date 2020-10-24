import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { theme } from '../../../styles/theme';
import Div from '../../styled-system/div/div';
import { Cell, Grid } from './layout-grid';

export default {
  title: 'Content/Layout Grid',
  component: Grid,
};

const DUMMY_DATA_LIST = {
  items: [
    {
      name: 'Alex',
    },
    {
      name: 'Alex',
    },
    {
      name: 'Alex',
    },
    {
      name: 'Alex',
    },
    {
      name: 'Alex',
    },
    {
      name: 'Alex',
    },
    {
      name: 'Alex',
    },
    {
      name: 'Alex',
    },
    {
      name: 'Alex',
    },
    {
      name: 'Alex',
    },
    {
      name: 'Alex',
    },
    {
      name: 'Alex',
    },
    {
      name: 'Alex',
    },
    {
      name: 'Alex',
    },
  ],
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Grid>
      {DUMMY_DATA_LIST.items.map((item, index) => {
        return (
          <Cell key={index} width={[1, 1 / 2, 1 / 3]}>
            <Div backgroundColor="crimson" marginBottom="10px">
              {item.name}
            </Div>
          </Cell>
        );
      })}
    </Grid>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
