import React from 'react';
import Button from '../../styled-system/button/button';
import Div from '../../styled-system/div/div';
import { theme } from '../../../styles/theme';
import A from '../../styled-system/a/a';

const HiringBox = () => {
  return (
    <Div
      backgroundColor="#da552f"
      borderRadius="3px"
      backgroundPosition="50%"
      backgroundSize="cover"
      padding="20px 20px 20px 40px"
      backgroundImage="url('https://ph-static.imgix.net/jobs/jobs_cta_background.png?auto=format&auto=compress')"
    >
      <Div
        fontFamily={theme.fonts.system}
        fontSize="16px"
        lineHeight="24px"
        fontWeight="600"
        color="#ffffff"
      >
        Are you hiring?
      </Div>
      <Div marginTop="5px" color="#ffffff" fontSize="13px" lineHeight="20px">
        Advertise from $299
      </Div>
      <A href="#">
        <Button
          marginTop="10px"
          fontSize="11px"
          fontWeight="600"
          fontFamily={theme.fonts.system}
          lineHeight="16px"
          backgroundColor="#fff"
          border="1px solid #e8e8e8"
          borderRadius="3px"
          padding="8px 13px"
          color="#cc4d29"
        >
          POST A JOB
        </Button>
      </A>
    </Div>
  );
};

export default HiringBox;
