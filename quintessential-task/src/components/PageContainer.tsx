import React from 'react';
import ChildrenPropsType from '../types/ChildrenPropsType';

const PageContainer = ({ children }: ChildrenPropsType) => {
  return <div className="flex">{children}</div>;
};

export default PageContainer;
