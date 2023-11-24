import { Suspense } from 'react';
import routes from './router';
import { Box } from '@chakra-ui/react';
import { useRoutes } from 'react-router-dom';
import Header from '@/components/heard';
function App() {
  return (
    <>
      <Header />
      <Suspense fallback="loading...">
        <Box>{useRoutes(routes)}</Box>
      </Suspense>
    </>
  );
}

export default App;
