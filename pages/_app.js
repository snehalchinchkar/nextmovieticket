import {Provider} from "react-redux"
import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './redux/slice'
import Nav from './nav'

const store=configureStore({reducer:{todoSlice}})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav/>
      <Provider store={store}>
      <Component {...pageProps} />
       </Provider>
    </>
    )
}

export default MyApp
