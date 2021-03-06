import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  const colors = {
    brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
    }
  }

  const theme = extendTheme({ colors })

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
