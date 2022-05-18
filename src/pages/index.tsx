import type { NextPage } from 'next';
import { Flex } from '@chakra-ui/react';
import DefaultLayout from '@app/components/layouts/DefaultLayout';

export const Home: NextPage = () => {
  return (
    <DefaultLayout fontSize={20} color="white">
      <Flex
        height="100vh"
        width="100vw"
        alignItems="center"
        justifyContent="center"
      >
        Sphinx of black quartz, judge my vow
      </Flex>
    </DefaultLayout>
  );
};

export default Home;
