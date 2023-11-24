import { Box } from '@chakra-ui/react';
import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
interface IPorps {
  children?: ReactNode;
}

//泛型约束
const ArticleItem: FC<IPorps> = (props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
        <Box w="800px" h="200px" boxShadow="md" p="6" rounded="md" bg="#fff" marginTop="20px">
          11111
        </Box>
      </motion.div>
    </>
  );
};
export default memo(ArticleItem);
