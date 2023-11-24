import { Box, Flex } from '@chakra-ui/react';
import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
import ArticleItem from './ArticleItem';

interface IPorps {
  children?: ReactNode;
}

//泛型约束
//flexDirection="column"纵向排列
const Home: FC<IPorps> = (props) => {
  return (
    <Box flexDirection="column" alignItems="center" w="100%" h="1000px">
      <Flex justifyContent="center" alignItems="center" minHeight="4vh"></Flex>
      <Box marginLeft="100px">
        <ArticleItem />
      </Box>
    </Box>
  );
};
export default memo(Home);
