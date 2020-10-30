/* eslint-disable jsx-a11y/accessible-emoji */
import React, { FC } from 'react';
import Div from '../../styled-system/div/div';
import A from '../../styled-system/a/a';
import Button from '../../styled-system/button/button';
import { theme } from '../../../styles/theme';
import styled from '@emotion/styled';

const StyledA = styled(A)`
  text-decoration: none;
`;

const StyledButton = styled(Button)`
  cursor: pointer;
  /* transition-property: background-color;
  transition-duration: 0.3s; */
  transition: background-color 0.3s;

  &:hover {
    background-color: #e8e8e8;
  }
`;

const JobsBox: FC<any> = (props) => {
  return (
    <Div
      backgroundColor="#fff"
      padding="20px"
      boxShadow="0 1px 2px 0 rgba(0,0,0,.1)"
      borderRadius="5px"
      className="JobsBox"
      fontFamily={theme.fonts.system}
      {...props}
    >
      <Div marginLeft="20px">
        <Div
          display="flex"
          flexDirection={['column', 'row']}
          justifyContent={[null, 'space-between']}
        >
          <StyledA href="#">
            <Div>
              <Div
                fontFamily={theme.fonts.system}
                lineHeight="24px"
                fontSize="16px"
                fontWeight="600"
                color="#000000"
              >
                Crowdfunder
              </Div>
              <Div
                fontFamily={theme.fonts.system}
                lineHeight="20px"
                fontSize="13px"
                fontWeight="600"
                marginTop="10px"
                color="#000000"
              >
                Product Manager
              </Div>
              <Div
                fontFamily={theme.fonts.system}
                lineHeight="20px"
                fontSize="13px"
                fontWeight="400"
                color="#6f6f6f"
                marginTop="5px"
              >
                UK, London, Brighton, Dorset, Cornwall
              </Div>
            </Div>
          </StyledA>
          <Div>
            <Div
              // marginBottom="10px"
              marginTop={['5px', '0px']}
              marginBottom={['10px', '20px']}
              fontSize={['13px']}
              display="flex"
              flexDirection="row"
              justifyContent={[null, 'flex-end']}
              fontFamily={theme.fonts.system}
            >
              💎
            </Div>

            <Div display="flex" flexDirection="row" justifyContent="flex-end">
              <StyledButton
                backgroundColor="#ffffff"
                border="1px solid #e8e8e8"
                borderRadius="3px"
                fontFamily={theme.fonts.system}
                fontSize="11px"
                fontWeight="600"
                color="#6f6f6f"
                lineHeight="16px"
                padding="8px 30px"
              >
                SHARE
              </StyledButton>
              <StyledButton
                backgroundColor="#ffffff"
                border="1px solid #e8e8e8"
                borderRadius="3px"
                fontFamily={theme.fonts.system}
                fontSize="11px"
                fontWeight="600"
                color="#000000"
                lineHeight="16px"
                padding="8px 30px"
                marginLeft="20px"
              >
                APPLY
              </StyledButton>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default JobsBox;
