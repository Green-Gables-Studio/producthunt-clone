import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { theme } from '../../../styles/theme';
import { Cell, Grid } from '../../content/layout-grid/layout-grid';
import HiringBox from '../../instance/hiring-box/hiring-box';
import Div from '../../styled-system/div/div';
import JobsBox from '../../instance/jobs-box/jobs-box';
import styled from '@emotion/styled';
import Main from '../../styled-system/main/main';
import FilterBox from '../../instance/filter-box/filter-box';
import SubscribeBox from '../../instance/subscribe-box/subscribe-box';

const StyledMain = styled(Main)`
  background-color: #efefef;
`;

const Jobs = () => {
  return (
    <ThemeProvider theme={theme}>
      <header>an example header</header>
      <StyledMain>
        <Grid flexDirection={['column-reverse', 'row']}>
          <Cell width={[1, null, 2 / 3]}>
            <Div
              fontSize="20px"
              fontWeight="600"
              lineHeight="32px"
              fontFamily={theme.fonts.system}
              mb="20px"
              mt="30px"
              paddingTop="4px"
              paddingBottom="4px"
            >
              Jobs
            </Div>
            <JobsBox mb="20px" />
            <JobsBox mb="20px" />
            <JobsBox mb="20px" />
          </Cell>
          <Cell width={[1, 0, 1 / 3]} display={[null, 'none', 'block']}>
            <HiringBox marginTop={['20px', '20px', '90px']} />
            <Div
              fontSize="16px"
              lineHeight="18px"
              marginBottom="10px"
              fontWeight="600"
              fontFamily={theme.fonts.system}
            >
              Filters
            </Div>
            <FilterBox />
            <SubscribeBox mt="20px" mb="20px" />
          </Cell>
        </Grid>
      </StyledMain>
      <footer>an exmaple footer</footer>
    </ThemeProvider>
  );
};

export default Jobs;
