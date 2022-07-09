import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Masthead from  '../components/masthead'
import AboutUs from   '../components/aboutus'
import Skills from    '../components/skills'
import Works from     '../components/works'
import TrustedBy from '../components/trustedby'
import ContactUs from '../components/contactus'
import Footer    from '../components/footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>funza-funzi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Masthead />
      <AboutUs  />
      <Skills   />
      <Works    />
      <TrustedBy />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home
