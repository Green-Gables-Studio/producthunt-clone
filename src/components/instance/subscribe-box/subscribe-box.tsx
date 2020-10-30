import React, { FC } from 'react';
import Div from '../../styled-system/div/div';
import Form from '../../styled-system/form/form';
import Label from '../../styled-system/label/label';
import Input from '../../styled-system/input/input';
import Button from '../../styled-system/button/button';
import { theme } from '../../../styles/theme';
import styled from '@emotion/styled';

const StyledButton = styled(Button)`
  transition: background-color 0.3s;

  &:hover {
    background-color: #e4461b;
  }
`;

const StyledInput = styled(Input)`
  transition: background-color 0.3s;

  &:hover {
    border-color: rgba(47, 160, 255, 0.4);
  }
`;

const SubscribeBox: FC<any> = (props) => {
  return (
    <Div
      backgroundColor="#ffffff"
      padding="20px"
      borderRadius="5px"
      boxShadow="0 1px 2px 0 rgba(0,0,0,.1)"
      {...props}
      fontFamily={theme.fonts.system}
    >
      <Div fontSize="16px" fontWeight="400" lineHeight="24px" marginBottom="10px">
        Don’t miss your dream job
      </Div>
      <Div lineHeight="20px" fontSize="13px" fontWeight="400" color="#6f6f6f" marginBottom="20px">
        Get email updates when new jobs are added ✌ ️
      </Div>
      <Form>
        <Label marginBottom="20px">
          <StyledInput
            fontSize="13px"
            fontFamily={theme.fonts.system}
            border="1px solid #e8e8e8"
            borderRadius="3px"
            padding="10px"
            height="35px"
            width="100%"
            placeholder="your@email.com"
          ></StyledInput>
          <StyledButton
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="#cc4d29"
            borderColor="#cc4d29"
            color="#ffffff"
            height="34px"
            width="100%"
            padding="13px 0px"
            borderRadius="3px"
            border="1px solid transparent"
            lineHeight="16px"
            fontWeight="600"
            fontSize="11px"
            fontFamily={theme.fonts.system}
            marginTop="20px"
          >
            SUBSCRIBE
          </StyledButton>
        </Label>
      </Form>
    </Div>
  );
};

export default SubscribeBox;
