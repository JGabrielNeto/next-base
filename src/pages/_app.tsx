import type { AppProps } from 'next/app';
import { theme } from '@app/styles/theme';
import Head from 'next/head';
import projectConfig from '../../package.json';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/barlow';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>{projectConfig.name}</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
