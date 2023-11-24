import { Box } from '@chakra-ui/react';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { FC, ReactNode } from 'react';
interface IPorps {
  children?: ReactNode;
}

//泛型约束
const Header: FC<IPorps> = (props) => {
  const [scrollVisible, setScrollVisible] = useState(true);

  const handleTableScroll = useCallback(() => {
    if (document?.documentElement?.scrollTop === 0) {
      setScrollVisible(true);
    } else {
      setScrollVisible(false);
    }
  }, [setScrollVisible]);

  // 监听滚动条的滚动事件
  useEffect(() => {
    window.addEventListener('scroll', handleTableScroll, true);
    return () => {
      window.removeEventListener('scroll', handleTableScroll);
    };
  }, [handleTableScroll]);

  return (
    <Box
      position="sticky"
      top="0px"
      boxShadow={!scrollVisible ? 'md' : ''}
      p="6"
      zIndex="99"
      bg="#fff">
      xs
    </Box>
  );
};
export default memo(Header);
