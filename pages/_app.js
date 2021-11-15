import React from 'react';
import 'antd/dist/antd.css';
import Layout from '../components/form/layout';
import '../styles/globals.scss'

function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout> 
  )
}
export default MyApp