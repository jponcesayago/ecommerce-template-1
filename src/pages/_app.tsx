import '@/styles/globals.css'
import '@fontsource-variable/league-spartan';



import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'League Spartan Variable', sans-serif`,
    body: `'League Spartan Variable', sans-serif`,
  },
})

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>)
    
}
