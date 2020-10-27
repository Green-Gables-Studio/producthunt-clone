import React, { FC } from 'react';
import Div from '../../styled-system/div/div';
import Form from '../../styled-system/form/form';
import Label from '../../styled-system/label/label';
import Input from '../../styled-system/input/input';
import Button from '../../styled-system/button/button';

const SubscribeBox: FC<any> = (props) => {
  return (
    <Div backgroundColor="#ffffff" padding="20px" borderRadius="5px" boxShadow="#000001" {...props}>
      <Div fontSize="16px" fontWeight="400" lineHeight="24px" marginBottom="10px">
        Don’t miss your dream job
      </Div>
      <Div lineHeight="20px" fontSize="13px" fontWeight="400" color="#6f6f6f" marginBottom="20px">
        Get email updates when new jobs are added ✌ ️
      </Div>
      <Form>
        <Label marginBottom="20px">
          <Input
            fontSize="13px"
            border="1px solid #e8e8e8"
            borderRadius="3px"
            padding="10px"
            height="35px"
            width="100%"
            placeholder="your@email.com"
          ></Input>
          <Button
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
            marginTop="20px"
          >
            Subscribe
          </Button>
        </Label>
      </Form>
    </Div>
  );
};

export default SubscribeBox;
