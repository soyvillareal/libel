import React from 'react'
import s from './Home.module.scss';
import Layout from '../../layout/Layout';
import Main from './Sections/Main';
import About from './Sections/About';
import Services from './Sections/Services';


export default function Sections() {
  return (
    <Layout>
      <Main />
      <About />
      <div className={s.dividerMiddle}></div>
      <Services />
    </Layout>
  )
};