import React, { FC } from 'react';
import Div from '../../styled-system/div/div';
import Label from '../../styled-system/label/label';
import Input from '../../styled-system/input/input';
import { theme } from '../../../styles/theme';

const FilterBox: FC<any> = (props) => {
  return (
    <Div
      backgroundColor="#ffffff"
      padding="20px"
      borderRadius="5px"
      boxShadow="0 1px 2px 0 rgba(0,0,0,.1)"
      {...props}
    >
      <Div
        lineHeight="20px"
        fontSize="13px"
        fontWeight="400"
        marginBottom="20px"
        display="flex"
        flexDirection="column"
      >
        <Label
          marginBottom="10px"
          fontWeight="400!important"
          lineHeight="20px"
          fontSize="13px"
          fontFamily={theme.fonts.system}
        >
          <Input type="checkbox" margin="0px 10px 0px 0px"></Input>
          ⚒️ Engineering
        </Label>
        <Label
          marginBottom="10px"
          fontWeight="400"
          lineHeight="20px"
          fontSize="13px"
          fontFamily={theme.fonts.system}
        >
          <Input type="checkbox" margin="0px 10px 0px 0px"></Input>
          🎨 Design
        </Label>
        <Label
          marginBottom="10px"
          fontWeight="400"
          lineHeight="20px"
          fontSize="13px"
          fontFamily={theme.fonts.system}
        >
          <Input type="checkbox" margin="0px 10px 0px 0px"></Input>
          📢 Marketing
        </Label>
        <Label
          marginBottom="10px"
          fontWeight="400"
          lineHeight="20px"
          fontSize="13px"
          fontFamily={theme.fonts.system}
        >
          <Input type="checkbox" margin="0px 10px 0px 0px"></Input>
          📈 Sales
        </Label>
        <Label
          marginBottom="10px"
          fontWeight="400"
          lineHeight="20px"
          fontSize="13px"
          fontFamily={theme.fonts.system}
        >
          <Input type="checkbox" margin="0px 10px 0px 0px"></Input>
          💖 Customer Support
        </Label>
        <Label fontWeight="400" lineHeight="20px" fontSize="13px" fontFamily={theme.fonts.system}>
          <Input type="checkbox" margin="0px 10px 0px 0px"></Input>
          💎 Product
        </Label>
      </Div>
    </Div>
  );
};

export default FilterBox;
