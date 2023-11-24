import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
interface IPorps {
  children?: ReactNode;
}

//泛型约束
const Category: FC<IPorps> = (props) => {
  return <>Category</>;
};
export default memo(Category);
