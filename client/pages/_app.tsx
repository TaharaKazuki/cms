// import 'antd/dist/antd.css'
import 'antd/dist/antd.dark.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../context/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
