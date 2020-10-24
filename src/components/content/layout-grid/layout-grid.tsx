import React, { FC } from 'react';
import Div from '../../styled-system/div/div';

export const Grid: FC<any> = ({ children, ...rest }) => {
  return (
    <Div padding={['0px 10px', '0px 12px', '0px']}>
      <Div
        maxWidth={[null, null, '1020px']}
        margin={[null, null, '0px auto']}
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
      >
        {children}
      </Div>
    </Div>
  );
};

export const Cell: FC<any> = ({ children, ...rest }) => {
  return (
    <Div padding={['0px 10px', '0px 12px', '0px 20px']} {...rest}>
      {children}
    </Div>
  );
};
