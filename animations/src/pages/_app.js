import '../../styles/index.css';
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    background:"black",
  },
}


const theme = extendTheme({ colors })

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}><Component {...pageProps} /></ChakraProvider>
}