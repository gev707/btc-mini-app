import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { ReactNode, ReactElement, FC } from 'react'
import { store } from '../src/store'
import { Provider } from 'react-redux'
import '../src/assets/styles/main.scss'

type Page<P = Record<string, unknown>> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode
}

type Props = AppProps & {
  Component: Page
}

const MyApp: FC<Props> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page: ReactElement) => page)

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  )
}

export default MyApp
